import {
  ShowcaseProductContent,
  ShowcaseProductDetails,
  ShowcaseProductVisual,
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

export const ShowcaseProduct = ({
  product,
  align,
  onOpen,
}: {
  product: ProductEntry;
  align: "left" | "right";
  onOpen: () => void;
}) => {
  const { image: imageSource } = useImage(product.image_src);

  const visual = (
    <ShowcaseProductVisual>
      <StyledImage
        src={imageSource}
        onClick={onOpen}
        alt={product.title}
      />
      <StyledProductTitle onClick={onOpen}>{product.title}</StyledProductTitle>
    </ShowcaseProductVisual>
  );

  const details = (
    <ShowcaseProductDetails $align={align}>
      <StyledProductDescription>{product.description}</StyledProductDescription>
    </ShowcaseProductDetails>
  );

  return (
    <ShowcaseProductContent>
      {align === "left" ? (
        <>
          {visual}
          {details}
        </>
      ) : (
        <>
          {details}
          {visual}
        </>
      )}
    </ShowcaseProductContent>
  );
};
