import {MainTitle, SecondaryTitle, Subtitle, TitleContainer} from "./Title.css.tsx";

export const Title = ({className}: {className: string}) => {
    return <TitleContainer className={className}>
        <MainTitle className={className}>Habibti Please</MainTitle>
        <SecondaryTitle className={className}>Product Line Sheet</SecondaryTitle>
        <Subtitle className={className}>Summer Collection | 2025</Subtitle>
    </TitleContainer>;
};
