import {SpotlightContainer, StyledSpotlightImage, LogoContainer, StyledLogo} from "./Spotlight.css.tsx";
import HabibtiPleaseLogo from "../../assets/img/habibti_please.png"
import SpotifyLogo from "../../assets/img/spotify_logo_bw.png"
import AppleLogo from "../../assets/img/apple-logo-bw.png"

export const Spotlight = () => {
    return <SpotlightContainer>
            <LogoContainer>
                Substack
                <a href="https://habibtiplease.substack.com/" target="_blank">
                    <StyledSpotlightImage src={HabibtiPleaseLogo} />
                </a>
            </LogoContainer>
        <LogoContainer>
            Podcast
            <a href="https://open.spotify.com/show/3HfMgIoBhNZF0jBbgcFiJM?si=0c245defefd94c11" target="_blank"><StyledLogo src={SpotifyLogo} /></a>
            <a href="https://podcasts.apple.com/us/podcast/habibti-please/id1531935387" target="_blank"><StyledLogo src={AppleLogo} /></a>
        </LogoContainer>
    </SpotlightContainer>;
};
