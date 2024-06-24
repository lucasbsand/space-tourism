import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.nav<{ isOpen: boolean }>`
  padding-inline: clamp(1rem, 5vw, 10rem);
  background-color: rgba(255, 255, 255, 0.04);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(81.55px);
  order: 2;
  transition: transform 0.2s ease-out;

  ul {
    display: flex;
    justify-content: center;
    gap: clamp(2rem, 5vw, 3rem);
    height: 100%;

    li {
      font-size: 1rem;
      list-style: none;
      font-style: normal;

      span {
        font-weight: bold;
        margin-right: 9px;
        letter-spacing: 2.7px;

        @media (min-width: 560px) and (max-width: 768px) {
          display: none;
        }
      }

      @media (min-width: 560px) and (max-width: 768px) {
        font-size: 0.875rem;
      }
    }

    @media (max-width: 560px) {
      flex-direction: column;
      justify-content: flex-start;
      padding-top: 7rem;
    }
  }

  @media (max-width: 560px) {
    position: fixed;
    top: 0;
    right: 0;

    display: block;
    transform: ${(props) =>
      props.isOpen ? 'translateX(0%)' : 'translateX(100%)'};

    width: 70%;
    min-width: fit-content;
    height: 100vh;
    padding-right: 0;
    z-index: 10000;
  }
`;

export const NavBarLink = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.light};
  padding-bottom: 3px;
  border-bottom: 3px solid transparent;
  letter-spacing: 2.7px;

  &:hover {
    border-bottom-color: rgba(255, 255, 255, 0.5);
  }

  &.active {
    border-bottom: 3px solid ${(props) => props.theme.light};
  }

  @media (max-width: 560px) {
    border-right: 3px solid transparent;
    border-bottom: none;

    &:hover {
      border-right-color: rgba(255, 255, 255, 0.5);
      border-bottom: none;
    }

    &.active {
      border-right: 3px solid ${(props) => props.theme.light};
      border-bottom: none;
    }
  }
`;
