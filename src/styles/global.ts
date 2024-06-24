import styled, { createGlobalStyle } from 'styled-components';

interface BackgroundInterface {
  bgdesktop: string;
  bgtablet: string;
  bgmobile: string;
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.light};
    background-color: ${({ theme }) => theme.dark};
    text-rendering: optimizeLegibility;
  }

  h1, li {
    font-family: 'Barlow Condensed', sans-serif;
  }

  p {
    font-family: 'Barlow', sans-serif;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  gap: 1.75rem;
  margin-bottom: 4rem;

  grid-area: 'image';

  h1,
  span {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.75rem;
    letter-spacing: 4.72px;
  }

  h1 {
    font-weight: 400;
  }

  span {
    color: rgba(255, 255, 255, 0.25);
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    gap: 1.125rem;

    h1,
    span {
      font-size: 1.25rem;
      letter-spacing: 3.38px;
    }
  }

  @media (max-width: 560px) {
    justify-content: center;
    margin-bottom: 2rem;

    h1,
    span {
      font-size: 1rem;
      letter-spacing: 2.7px;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  padding: 0 3.5rem;
  padding-bottom: clamp(3rem, 10vh, 8.1875rem);
  max-width: 90rem;
  margin: 0 auto;
  min-height: calc(100vh - 11rem);
  width: 100%;

  @media (max-width: 768px) {
    min-height: calc(100vh - 8.5rem);
    padding: 1rem 2.4063rem clamp(3rem, 10vh, 8.1875rem);
  }
`;

export const Background = styled.div<BackgroundInterface>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-image: url(${(props) => props.bgdesktop});
  background-size: cover;
  background-position: center center;

  z-index: -1;

  @media (max-width: 768px) {
    background-image: url(${(props) => props.bgtablet});
    background-size: cover;
    background-position: center center;
  }

  @media (max-width: 375px) {
    background-image: url(${(props) => props.bgmobile});
    background-size: cover;
    background-position: center center;
  }
`;
