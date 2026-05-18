import styled from "styled-components";

const carouselItemWidth = `
  flex: 0 0 auto;
  width: clamp(220px, 28vw, 320px);
`;

export const CustomPricingContainer = styled.div`
  ${carouselItemWidth}
  background-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  height: fit-content;
  border: 2pxrgb (255, 255, 255);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 1rem;
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 400;
  text-align: center;
`;

export const ShowcaseProductsContainer = styled.div`
  align-self: stretch;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
`;

export const ShowcaseProductRow = styled.div<{ $align: "left" | "right" }>`
  display: flex;
  width: 100%;
  justify-content: ${({ $align }) =>
    $align === "left" ? "flex-start" : "flex-end"};
  padding-inline: clamp(1rem, 6vw, 5rem);
`;

export const ShowcaseProductContent = styled.div<{ $align: "left" | "right" }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: clamp(1.5rem, 4vw, 3rem);
  max-width: min(52rem, 100%);
  width: 100%;

  ${({ $align }) =>
    $align === "right" &&
    `
    flex-direction: row-reverse;
  `}

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ShowcaseProductVisual = styled.div`
  flex: 0 0 auto;
  width: clamp(220px, 28vw, 320px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const ShowcaseProductDetails = styled.div<{ $align: "left" | "right" }>`
  flex: 1;
  min-width: 0;
  max-width: 28rem;
  text-align: ${({ $align }) => ($align === "left" ? "left" : "right")};

  @media (max-width: 700px) {
    text-align: center;
    max-width: 100%;
  }
`;

export const ProductsContainer = styled.div`
  align-self: stretch;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 2rem;
  flex-wrap: nowrap;
  gap: 2rem;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  cursor: grab;
  touch-action: manipulation;
  overscroll-behavior-x: contain;
  &.is-dragging {
    cursor: grabbing;
    user-select: none;
  }
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`;
export const StyledProduct = styled.div`
  ${carouselItemWidth}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
`;

export const ProductsGridContainer = styled.div`
  align-self: center;
  width: 100%;
  display: grid;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  padding: 2rem;

  ${StyledProduct} {
    width: 100%;
    flex: none;
  }

  ${CustomPricingContainer} {
    width: 100%;
    flex: none;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  -webkit-user-drag: none;
  user-select: none;
  border-radius: 0 100px 0 100px;
  @media (max-width: 800px) {
    border-radius: 0 50px 0 50px;
  }
  border: black 1px solid;
`;

export const StyledProductTitle = styled.p`
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 400;
  cursor: pointer;
`;

export const StyledProductDescription = styled.p`
  font-family: Montserrat, sans-serif;
  font-style: italic;
  font-weight: 200;
`;

export const ModalContainer = styled("div")<{ $isOpen: boolean }>`
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: ${({ $isOpen }) => ($isOpen ? 1000 : 0)};
  transition: 0.4s;
  backdrop-filter: blur(5rem);
`;

export const ModalContent = styled.div`
  max-width: min(32rem, 90vw);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export const ModalGallery = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

export const ModalMainImage = styled.div`
  width: 100%;
  max-width: 20rem;

  img {
    width: 100%;
    cursor: default;
  }
`;

export const ModalThumbnails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
`;

export const ModalThumbnail = styled.button<{ $active: boolean }>`
  flex: 0 0 auto;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0;
  border: 2px solid
    ${({ $active }) => ($active ? "black" : "rgba(0, 0, 0, 0.2)")};
  border-radius: 0 18px 0 18px;
  background: white;
  cursor: pointer;
  overflow: hidden;
  opacity: ${({ $active }) => ($active ? 1 : 0.65)};
  transition:
    opacity 0.2s,
    border-color 0.2s;

  &:hover {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border: none;
    border-radius: 0;
    cursor: pointer;
  }
`;

export const ProductTitle = styled.h2`
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 400;
`;
