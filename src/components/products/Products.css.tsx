import styled from 'styled-components'

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    gap: 2rem
`;
export const StyledProduct =  styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
`;

export const StyledImage = styled.img``

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