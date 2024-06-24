import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  /* gap: clamp(1rem, 5vw, 3rem); */
  gap: 3rem;
  width: 100%;
  padding: 0 1.5rem;

  article {
    h1 {
      font-size: 1.75rem;
      letter-spacing: 4.75px;
      color: ${(props) => props.theme.gray};
      font-weight: 400;
    }

    span {
      font-family: 'Bellefair', serif;
      font-size: clamp(3rem, 10vw, 9.375rem);
    }

    p {
      font-size: 1.125rem;
      color: ${(props) => props.theme.gray};
      line-height: 2rem;
      max-width: 440px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    article {
      text-align: center;

      h1 {
        font-size: 1.25rem;
        letter-spacing: 3.35px;
      }

      span {
        font-size: clamp(5rem, 20vw, 9.375rem);
      }

      p {
        font-size: 1rem;
        line-height: 1.75rem;
      }
    }
  }

  @media (max-width: 560px) {
    article {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h1 {
        font-size: 1rem;
        letter-spacing: 2.7px;
      }

      span {
        font-size: 5rem;
      }

      p {
        font-size: 0.9375rem;
        line-height: 1.5625rem;
      }
    }
  }
`;
