import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
`;

export const DataContainer = styled.article`
  display: flex;
  justify-content: space-around;
  gap: 2rem;

  width: 100%;

  picture {
    width: 100%;
    max-width: 27.8125rem;

    img {
      width: 100%;
      height: 100%;
      aspect-ratio: 1;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 3.3125rem;

    picture {
      max-width: 18.75rem;
    }
  }

  @media (max-width: 560px) {
    gap: 1.625rem;

    picture {
      max-width: 170px;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  max-width: 50%;

  @media (max-width: 1024px) {
    text-align: center;
    max-width: 90%;
  }

  @media (max-width: 560px) {
    max-width: none;
  }
`;

export const TabList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2.25rem;

  input[type='radio'] {
    display: none;

    &:checked + label {
      border-bottom: 3px solid ${(props) => props.theme.light};
    }
  }

  label {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1rem;
    letter-spacing: 2.7px;

    padding-bottom: 0.75rem;
    border-bottom: 3px solid transparent;

    cursor: pointer;

    &:hover {
      border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    }
  }

  @media (max-width: 1024px) {
    justify-content: center;

    width: 100%;

    margin-bottom: 2rem;
  }

  @media (max-width: 560px) {
    gap: 1.625rem;

    label {
      font-size: 0.875rem;
      letter-spacing: 2.36px;
    }
  }
`;

export const InfoBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  padding-bottom: 3.375rem;
  border-bottom: 1px solid #383b4b;

  span {
    font-family: 'Bellefair', serif;
    font-size: 6.25rem;
    color: ${(props) => props.theme.light};
  }

  p {
    font-family: 'Barlow', sans-serif;
    font-size: 1.125rem;
    line-height: 2rem;
    color: ${(props) => props.theme.gray};
  }

  @media (max-width: 1024px) {
    gap: 0.5rem;

    padding-bottom: 3rem;

    span {
      font-size: 5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.75rem;
    }
  }

  @media (max-width: 560px) {
    padding-bottom: 2rem;

    span {
      font-size: 3.5rem;
    }

    p {
      font-size: 0.9375rem;
      line-height: 1.5625rem;
    }
  }
`;

export const InfoFooter = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5rem;

  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    p {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 0.875rem;
      letter-spacing: 2.36px;
      color: ${(props) => props.theme.gray};
    }

    span {
      font-family: 'Bellefair', serif;
      font-size: 1.75rem;
      color: ${(props) => props.theme.light};
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
    margin-top: 1.75rem;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    margin-top: 2rem;
  }
`;
