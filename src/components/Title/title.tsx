import HabibtiPleaseLogo from "../../assets/img/habibti_please.png";
import SpotifyLogo from "../../assets/img/spotify_logo_bw.png";
import AppleLogo from "../../assets/img/apple-logo-bw.png";
import {
  MainTitle,
  SecondaryTitle,
  Subtitle,
  TitleColumn,
  TitleContainer,
  TitlePodcastLinks,
  TitleSideLeft,
  TitleSideRight,
  TitleSpotlightImage,
  TitlePodcastLogo,
} from "./Title.css.tsx";

export const Title = ({ className }: { className: string }) => {
  return (
    <TitleContainer className={className}>
      <TitleSideLeft>
        <a
          href="https://habibtiplease.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TitleSpotlightImage
            className={className}
            src={HabibtiPleaseLogo}
            alt="Habibti Please on Substack"
          />
        </a>
      </TitleSideLeft>

      <TitleColumn>
        <MainTitle className={className}>Habibti Please</MainTitle>
        <SecondaryTitle className={className}>
          Product Line Sheet
        </SecondaryTitle>
        <Subtitle className={className}>Summer Collection | 2026</Subtitle>
      </TitleColumn>

      <TitleSideRight>
        <TitlePodcastLinks className={className}>
          <a
            href="https://open.spotify.com/show/3HfMgIoBhNZF0jBbgcFiJM?si=0c245defefd94c11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TitlePodcastLogo
              className={className}
              src={SpotifyLogo}
              alt="Listen on Spotify"
            />
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/habibti-please/id1531935387"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TitlePodcastLogo
              className={className}
              src={AppleLogo}
              alt="Listen on Apple Podcasts"
            />
          </a>
        </TitlePodcastLinks>
      </TitleSideRight>
    </TitleContainer>
  );
};
