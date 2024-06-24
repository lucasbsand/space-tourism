import styled from 'styled-components';
import { Main, PageHeader } from '../../styles/global';

export const MainContainer = styled(Main)`
  padding-right: 0;

  @media (max-width: 768px) {
    padding-left: 0;
  }

  @media (max-width: 560px) {
    padding-bottom: 0;
  }
`;

export const Section = styled.section`
  width: 100%;
`;

export const Header = styled(PageHeader)`
  @media (max-width: 768px) and (min-width: 560px) {
    padding: 0 2.4063rem;
  }
`;

export const InfoContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(1rem, 10vw - 1rem, 8.125rem);

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 3.5rem;
  }

  @media (max-width: 560px) {
    gap: 2.125rem;
  }
`;

export const TabList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  input {
    display: none;

    &:checked + label {
      color: ${(props) => props.theme.dark};
      background-color: ${(props) => props.theme.light};
      border-color: ${(props) => props.theme.light};
    }
  }

  label {
    display: grid;
    place-items: center;

    font-family: 'Bellefair', serif;
    font-size: 2rem;
    letter-spacing: 2px;

    width: 5rem;
    height: 5rem;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 50%;

    cursor: pointer;

    &:hover {
      border-color: ${(props) => props.theme.light};
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1rem;

    label {
      font-size: 1.5rem;
      letter-spacing: 1.5px;

      width: 3.75rem;
      height: 3.75rem;
    }
  }

  @media (max-width: 560px) {
    label {
      font-size: 1rem;
      letter-spacing: 1px;

      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 5vw - 1rem, 5rem);

  div {
    max-width: 29.375rem;

    h2 {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 2.7px;
      color: ${(props) => props.theme.gray};
      margin-bottom: 0.75rem;
    }

    span {
      font-family: 'Bellefair', serif;
      font-size: 3.5rem;
      text-transform: uppercase;
    }

    p {
      font-size: 1.125rem;
      line-height: 2rem;
      color: ${(props) => props.theme.gray};
      margin-top: 1rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2.75rem;

    width: 100%;
    padding: 0 2rem 1rem;
    text-align: center;

    div {
      max-width: 80%;

      h2 {
        margin-bottom: 1rem;
      }

      span {
        font-size: 2.5rem;
      }

      p {
        font-size: 1rem;
        line-height: 1.75rem;
      }
    }
  }

  @media (max-width: 560px) {
    gap: 1.625rem;

    div {
      max-width: none;

      h2 {
        font-size: 0.875rem;
        letter-spacing: 2.36px;
        margin-bottom: 0.5625rem;
      }

      span {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.9375rem;
        line-height: 1.5625rem;
      }
    }
  }
`;

export const Picture = styled.picture`
  display: flex;
  justify-content: flex-end;

  width: fit-content;
  height: 100%;
  max-height: 527px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
