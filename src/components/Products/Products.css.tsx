import styled from 'styled-components'

export const CustomPricingContainer = styled.div`
    width: 30%;
    @media (max-width: 800px) {
        width: 40%
    }
    background-color: #3bb371;
    color: #e0feca;
    height: fit-content;
    border: 2px #e0feca;
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
`

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem;
    flex-wrap: wrap;
    gap: 2rem;
    
`;
export const StyledProduct =  styled.div`
    width: 30%;
    @media (max-width: 800px) {
        width: 40%
    }
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
    border-radius: 0 100px 0 100px;
    @media (max-width: 800px) {
        border-radius: 0 50px 0 50px;
    }
    border: black 1px solid;
`

export const StyledProductTitle = styled.p`
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 400;
`

export const StyledProductDescription = styled.p`
    font-family: Montserrat, sans-serif;
    font-style: italic;
    font-weight: 200;
`

export const ModalContainer = styled("div")<{$isOpen: boolean}>`
    visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
    opacity: ${({ $isOpen }) => $isOpen ? '1' : '0'};
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: 0.4s;
    backdrop-filter: blur(5rem);
`

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
`