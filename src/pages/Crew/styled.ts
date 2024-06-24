import styled from 'styled-components';
import { Main } from '../../styles/global';

export const MainContainer = styled(Main)`
  padding-bottom: 0;
`;

export const Section = styled.section`
  @media (max-width: 560px) {
    padding: 0 0 1rem;
  }
`;

export const InfoContainer = styled.article`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  height: 100%;
  max-height: 37.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 2.5rem;
    max-height: none;
  }

  @media (max-width: 560px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    gap: 2rem;
    height: auto;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;

  span {
    font-family: 'Bellefair', serif;
    text-transform: uppercase;
  }

  span:nth-child(1) {
    font-size: 2rem;
    color: rgba(255, 255, 255, 50.42%);

    margin-bottom: 1rem;
  }

  span:nth-child(2) {
    font-size: 3.5rem;

    margin-bottom: 1.625rem;
  }

  p {
    font-family: 'Barlow', sans-serif;
    font-size: 1.125rem;
    line-height: 2rem;
    color: ${(props) => props.theme.gray};
    margin-bottom: 7.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;

    span:nth-child(1) {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    span:nth-child(2) {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.75rem;
      margin-bottom: 2.5rem;
    }
  }

  @media (max-width: 560px) {
    span:nth-child(1) {
      order: 2;
      font-size: 1rem;
    }

    span:nth-child(2) {
      order: 3;
      font-size: 1.5rem;
    }

    p {
      order: 4;
      font-size: 0.9375rem;
      line-height: 25px;
      margin: 0;
    }
  }
`;

export const TabList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 560px) {
    order: 1;
    margin-bottom: 2rem;
  }
`;

export const Button = styled.button<{ isSelected: boolean }>`
  width: 0.9375rem;
  height: 0.9375rem;
  border: none;
  border-radius: 50%;

  background-color: ${(props) =>
    props.isSelected ? props.theme.light : 'rgba(255, 255, 255, 17.45%)'};

  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 50%);
  }
`;

export const Picture = styled.picture`
  display: flex;
  align-items: flex-end;
  align-self: flex-end;

  width: 50%;
  height: 100%;
  overflow-y: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center bottom;
    border-bottom: 1px solid #383b4b;
  }

  @media (max-width: 768px) {
    width: auto;
    height: 100%;
    align-self: center;

    img {
      max-width: 100%;
    }
  }

  @media (max-width: 560px) {
    width: 100%;
    max-height: 13.9375rem;

    img {
      height: 13.9375rem;
    }
  }
`;
