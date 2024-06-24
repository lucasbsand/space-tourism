import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  position: relative;

  display: inline-grid;
  place-items: center;

  font-family: 'Bellefair', serif;
  font-size: clamp(1rem, 2vw, 2rem);
  letter-spacing: 2px;
  padding: 0 clamp(2rem, 5vw, 4rem);
  background-color: ${(props) => props.theme.light};
  color: ${(props) => props.theme.dark};
  text-decoration: none;
  border-radius: 50%;

  z-index: 5;
  aspect-ratio: 1;
  cursor: pointer;

  -webkit-tap-highlight-color: transparent;

  &::before {
    content: '';

    position: absolute;
    display: block;
    background-color: rgba(255, 255, 255, 10%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 0.2s ease;
    z-index: 2;
  }

  &:hover::before,
  &:active::before {
    transform: scale(1.4);
  }

  @media (max-width: 768px) {
    padding: 0 clamp(2.5rem, 10vw, 5rem);
  }
`;
