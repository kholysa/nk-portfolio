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
  max-width: 30%;
  z-index: 999;
  @media (max-width: 800px) {
    max-width: 70%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export const ProductTitle = styled.h2`
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 400;
`;