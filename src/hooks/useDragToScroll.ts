import { type RefObject, useEffect } from "react";

/** Pixels of pointer movement before a gesture counts as a drag (not a click). */
const DRAG_THRESHOLD = 6;

/** Minimum scroll velocity (px/ms) to start momentum after release. */
const MIN_MOMENTUM_VELOCITY = 0.015;

/** Multiplier on pointer velocity → scroll velocity (tune for “weight”). */
const MOMENTUM_GAIN = 1.15;

/** Velocity decay per ~16.7ms frame at 60fps (higher = more glide). */
const FRICTION_PER_FRAME = 0.965;

export function useDragToScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let activePointerId: number | null = null;
    let startX = 0;
    let startScrollLeft = 0;
    let dragged = false;

    let lastMoveX = 0;
    let lastMoveT = 0;
    /** Pointer velocity along X (px/ms); used for momentum. */
    let pointerVelMs = 0;

    let momentumRaf = 0;

    const cancelMomentum = () => {
      if (momentumRaf !== 0) {
        cancelAnimationFrame(momentumRaf);
        momentumRaf = 0;
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      cancelMomentum();
      activePointerId = e.pointerId;
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;
      dragged = false;
      lastMoveX = e.clientX;
      lastMoveT = e.timeStamp;
      pointerVelMs = 0;
      el.setPointerCapture(e.pointerId);
      el.classList.add("is-dragging");
    };

    const onPointerMove = (e: PointerEvent) => {
      if (activePointerId === null || e.pointerId !== activePointerId) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > DRAG_THRESHOLD) dragged = true;
      el.scrollLeft = startScrollLeft - dx;

      const dt = e.timeStamp - lastMoveT;
      if (dt > 0) {
        pointerVelMs = (e.clientX - lastMoveX) / dt;
      }
      lastMoveX = e.clientX;
      lastMoveT = e.timeStamp;
    };

    const endPointer = (e: PointerEvent) => {
      if (activePointerId === null || e.pointerId !== activePointerId) return;
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* already released */
      }
      activePointerId = null;
      el.classList.remove("is-dragging");

      if (dragged) {
        const stopClick = (ev: Event) => {
          ev.preventDefault();
          ev.stopPropagation();
        };
        el.addEventListener("click", stopClick, { capture: true, once: true });
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      // scroll velocity (px/ms) = -pointer velocity (same relation as drag)
      let scrollVelMs = -pointerVelMs * MOMENTUM_GAIN;
      if (!dragged || Math.abs(scrollVelMs) < MIN_MOMENTUM_VELOCITY) {
        return;
      }

      let lastNow = performance.now();

      const tick = (now: number) => {
        const dt = Math.min(now - lastNow, 32);
        lastNow = now;

        const maxScroll = el.scrollWidth - el.clientWidth;
        let next = el.scrollLeft + scrollVelMs * dt;
        next = Math.max(0, Math.min(maxScroll, next));
        el.scrollLeft = next;

        // Hit edge: kill momentum in that direction
        if (next <= 0 && scrollVelMs < 0) scrollVelMs = 0;
        if (next >= maxScroll && scrollVelMs > 0) scrollVelMs = 0;

        scrollVelMs *= Math.pow(FRICTION_PER_FRAME, dt / 16.67);

        if (Math.abs(scrollVelMs) < 0.002) {
          momentumRaf = 0;
          return;
        }

        momentumRaf = requestAnimationFrame(tick);
      };

      momentumRaf = requestAnimationFrame(tick);
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endPointer);
    el.addEventListener("pointercancel", endPointer);

    return () => {
      cancelMomentum();
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endPointer);
      el.removeEventListener("pointercancel", endPointer);
      el.classList.remove("is-dragging");
    };
  }, []);
}
