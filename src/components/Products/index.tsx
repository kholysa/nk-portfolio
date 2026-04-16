import { useEffect, useRef, useState } from "react";
import ProductsJson from "./products.json";
import {
  ModalContainer,
  ModalContent,
  ProductsContainer,
  ProductTitle,
} from "./Products.css.tsx";
import { Product, ProductModalContent } from "./product.tsx";
import { CustomPricingCard } from "./CustomPricingCard.tsx";
import { useDragToScroll } from "../../hooks/useDragToScroll.ts";

export const Products = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useDragToScroll(scrollRef);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selectedIndex]);

  return (
    <>
      <ProductTitle>The hats</ProductTitle>

      <ModalContainer
        $isOpen={selectedIndex !== null}
        onClick={() => setSelectedIndex(null)}
      >
        {selectedIndex !== null && (
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ProductModalContent product={ProductsJson[selectedIndex]} />
          </ModalContent>
        )}
      </ModalContainer>

      <ProductsContainer ref={scrollRef}>
        {ProductsJson.map((prd, index) => (
          <Product
            key={`${prd.title}-${index}`}
            image={prd.image_src}
            title={prd.title}
            onOpen={() => setSelectedIndex(index)}
          />
        ))}
        <CustomPricingCard />
      </ProductsContainer>
    </>
  );
};
