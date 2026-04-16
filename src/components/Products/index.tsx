import { useRef } from "react";
import ProductsJson from "./products.json";
import { ProductsContainer, ProductTitle } from "./Products.css.tsx";
import { Product } from "./product.tsx";
import { CustomPricingCard } from "./CustomPricingCard.tsx";
import { useDragToScroll } from "../../hooks/useDragToScroll.ts";

export const Products = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useDragToScroll(scrollRef);

  return (
    <>
      <ProductTitle>Products</ProductTitle>
      <ProductsContainer ref={scrollRef}>
        {ProductsJson.map((prd) => (
          <Product
            key={prd.title}
            image={prd.image_src}
            title={prd.title}
            description={prd.description}
          />
        ))}
        <CustomPricingCard />
      </ProductsContainer>
    </>
  );
};
