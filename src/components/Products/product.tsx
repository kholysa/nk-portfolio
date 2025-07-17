import {StyledImage, StyledProduct, StyledProductDescription, StyledProductTitle} from "./Products.css.tsx";
import useImage from "../../hooks/useImage.tsx";
export const Product = ({
                            image,
                            title,
                            description,
                        }: {
    image: string;
    title: string;
    description: string;
}) => {
    const { image: imageSource } = useImage(image)
    return (
        <StyledProduct>
            <StyledImage src={imageSource}/>
            <StyledProductTitle>{title}</StyledProductTitle>
            <StyledProductDescription>{description}</StyledProductDescription>
        </StyledProduct>
    );
};
