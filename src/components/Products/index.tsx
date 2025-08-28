import ProductsJson from "./products.json";
import {ProductsContainer} from "./Products.css.tsx";
import {Product} from "./product.tsx";
import {CustomPricingCard} from "./CustomPricingCard.tsx";

export const Products = () => {
    return (
        <ProductsContainer>
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
    );
};
