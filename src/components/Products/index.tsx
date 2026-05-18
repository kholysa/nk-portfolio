import { useEffect, useRef, useState } from "react";
import ProductsJson from "./products.json";
import ShowcaseJson from "./showcase.json";
import {
  ModalCloseButton,
  ModalContainer,
  ModalContent,
  ProductsContainer,
  ProductsGridContainer,
  ProductTitle,
  ShowcaseProductRow,
  ShowcaseProductsContainer,
} from "./Products.css.tsx";
import { Product, ProductModalContent, ShowcaseProduct } from "./product.tsx";
import type { ProductEntry } from "./product.tsx";
import { CustomPricingCard } from "./CustomPricingCard.tsx";
import { useDragToScroll } from "../../hooks/useDragToScroll.ts";

type ProductsProps = {
  limit?: number;
  showCustomCard?: boolean;
  title?: string;
  layout?: "carousel" | "alternating" | "grid";
};

export const Products = ({
  limit,
  showCustomCard = true,
  title = "The hats",
  layout = "carousel",
}: ProductsProps) => {
  const products: ProductEntry[] = limit
    ? ProductsJson.slice(0, limit)
    : ProductsJson;

  const showcaseProducts: ProductEntry[] = ShowcaseJson;

  const scrollRef = useRef<HTMLDivElement>(null);
  const isAlternating = layout === "alternating";
  const isGrid = layout === "grid";
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
      <ProductTitle>{title}</ProductTitle>

      <ModalContainer
        $isOpen={selectedIndex !== null}
        onClick={() => setSelectedIndex(null)}
      >
        {selectedIndex !== null && (
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalCloseButton
              type="button"
              aria-label="Close"
              onClick={() => setSelectedIndex(null)}
            >
              ×
            </ModalCloseButton>
            <ProductModalContent
              key={selectedIndex}
              product={products[selectedIndex]}
            />
          </ModalContent>
        )}
      </ModalContainer>

      {isAlternating ? (
        <ShowcaseProductsContainer>
          {showcaseProducts.map((prd, index) => {
            const align = index % 2 === 0 ? "left" : "right";
            return (
              <ShowcaseProductRow key={`${prd.title}-${index}`} $align={align}>
                <ShowcaseProduct
                  product={prd}
                  align={align}
                  onOpen={() => {}}
                />
              </ShowcaseProductRow>
            );
          })}
        </ShowcaseProductsContainer>
      ) : isGrid ? (
        <ProductsGridContainer>
          {products.map((prd, index) => (
            <Product
              key={`${prd.title}-${index}`}
              image={prd.image_src}
              title={prd.title}
              onOpen={() => setSelectedIndex(index)}
            />
          ))}
          {showCustomCard && <CustomPricingCard />}
        </ProductsGridContainer>
      ) : (
        <ProductsContainer ref={scrollRef}>
          {products.map((prd, index) => (
            <Product
              key={`${prd.title}-${index}`}
              image={prd.image_src}
              title={prd.title}
              onOpen={() => setSelectedIndex(index)}
            />
          ))}
          {showCustomCard && <CustomPricingCard />}
        </ProductsContainer>
      )}
    </>
  );
};
