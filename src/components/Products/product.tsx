import {
  StyledImage,
  StyledProduct,
  StyledProductDescription,
  StyledProductTitle,
} from "./Products.css.tsx";
import useImage from "../../hooks/useImage.tsx";

export type ProductEntry = {
  image_src: string;
  title: string;
  description: string;
};

export const ProductModalContent = ({ product }: { product: ProductEntry }) => {
  const { image: imageSource } = useImage(product.image_src);
  return (
    <>
      <StyledImage src={imageSource} alt={product.title} />
      <StyledProductTitle>{product.title}</StyledProductTitle>
      <StyledProductDescription>{product.description}</StyledProductDescription>
    </>
  );
};

export const Product = ({
  image,
  title,
  onOpen,
}: {
  image: string;
  title: string;
  onOpen: () => void;
}) => {
  const { image: imageSource } = useImage(image);

  return (
    <StyledProduct>
      <StyledImage src={imageSource} onClick={onOpen} alt={title} />
      <StyledProductTitle onClick={onOpen}>{title}</StyledProductTitle>
    </StyledProduct>
  );
};
