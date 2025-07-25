import {useState} from "react";
import {
    StyledImage,
    StyledProduct,
    StyledProductDescription,
    StyledProductTitle,
    ModalContainer, ModalContent
} from "./Products.css.tsx";
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {image: imageSource} = useImage(image)
    return (<>
            <ModalContainer $isOpen={isModalOpen} onClick={() => setIsModalOpen(false)}>
                <ModalContent onClick={() => setIsModalOpen(true)}>
                    <StyledImage src={imageSource}/>
                    <StyledProductTitle>{title}</StyledProductTitle>
                    <StyledProductDescription>{description}</StyledProductDescription>
                </ModalContent>
            </ModalContainer>
            <StyledProduct>
                <StyledImage src={imageSource} onClick={() => setIsModalOpen(true)}/>
                <StyledProductTitle>{title}</StyledProductTitle>
            </StyledProduct>
        </>
    );
};
