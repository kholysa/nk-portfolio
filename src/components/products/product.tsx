import {StyledImage, StyledProduct, StyledProductDescription, StyledProductTitle} from "./Products.css.tsx";

export const Product = ({
                            image,
                            title,
                            description,
                        }: {
    image: string;
    title: string;
    description: string;
}) => {
    return (
        <StyledProduct>
            <StyledImage src={image} />
            <StyledProductTitle>{title}</StyledProductTitle>
            <StyledProductDescription>{description}</StyledProductDescription>
        </StyledProduct>
    );
};
