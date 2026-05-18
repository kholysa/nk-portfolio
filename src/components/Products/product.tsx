import { useEffect, useState } from "react";
import {
  ModalGallery,
  ModalMainImage,
  ModalThumbnail,
  ModalThumbnails,
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
  gallery_images?: string[];
};

export function getProductImages(product: ProductEntry): string[] {
  return [
    ...new Set([product.image_src, ...(product.gallery_images ?? [])]),
  ];
}

const ProductImage = ({
  fileName,
  alt,
  onClick,
  className,
}: {
  fileName: string;
  alt: string;
  onClick?: () => void;
  className?: string;
}) => {
  const { image } = useImage(fileName);
  if (!image) return null;

  return (
    <StyledImage
      src={image}
      alt={alt}
      onClick={onClick}
      className={className}
    />
  );
};

export const ProductModalContent = ({ product }: { product: ProductEntry }) => {
  const images = getProductImages(product);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [product.image_src, product.gallery_images]);

  return (
    <>
      <ModalGallery>
        <ModalMainImage>
          <ProductImage
            fileName={images[activeIndex]}
            alt={`${product.title} — view ${activeIndex + 1}`}
          />
        </ModalMainImage>
        {images.length > 1 && (
          <ModalThumbnails>
            {images.map((fileName, index) => (
              <ModalThumbnail
                key={`${fileName}-${index}`}
                type="button"
                $active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                aria-label={`View image ${index + 1} of ${images.length}`}
                aria-current={index === activeIndex}
              >
                <ProductImage
                  fileName={fileName}
                  alt={`${product.title} thumbnail ${index + 1}`}
                />
              </ModalThumbnail>
            ))}
          </ModalThumbnails>
        )}
      </ModalGallery>
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
    <ShowcaseProductContent $align={align}>
      {visual}
      {details}
    </ShowcaseProductContent>
  );
};
