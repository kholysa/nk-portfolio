import styled from "styled-components";

export const MarkdownBody = styled.div`
  font-family: Montserrat, sans-serif;
  font-style: italic;
  font-weight: 200;
  line-height: 1.7;
  text-align: inherit;

  p {
    margin: 0 0 0.75rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    font-weight: 500;
    font-style: normal;
  }

  em {
    font-style: italic;
  }

  a {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 0.15em;

    &:hover {
      opacity: 0.7;
    }
  }

  ul,
  ol {
    margin: 0.5rem 0;
    padding-left: 1.25rem;
    text-align: left;
  }

  li {
    margin-bottom: 0.35rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin: 0 0 0.5rem;
  }

  blockquote {
    margin: 0.5rem 0;
    padding-left: 1rem;
    border-left: 2px solid rgba(0, 0, 0, 0.2);
  }

  code {
    font-family: monospace;
    font-size: 0.9em;
    font-style: normal;
  }
`;
