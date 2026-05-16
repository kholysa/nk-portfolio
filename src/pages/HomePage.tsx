import { AboutUs } from "../components/AboutUs/AboutUs.tsx";
import { HeaderImage } from "../components/HeaderImage/headerImage.tsx";
import { Products } from "../components/Products";

export const HomePage = () => {
  return (
    <>
      <HeaderImage />
      <AboutUs />
      <Products
        limit={3}
        showCustomCard={false}
        title="Featured"
        layout="alternating"
      />
    </>
  );
};
