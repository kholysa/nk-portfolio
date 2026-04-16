import HeaderHero from "../../assets/img/hats_on_display.png";
import { HeaderImageSection, HeaderImageStyled } from "./HeaderImage.css.tsx";

export const HeaderImage = () => {
  return (
    <HeaderImageSection>
      <HeaderImageStyled
        src={HeaderHero}
        alt="Habibti Please collection"
        loading="eager"
        decoding="async"
      />
    </HeaderImageSection>
  );
};
