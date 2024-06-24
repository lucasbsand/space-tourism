import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled(Link)`
  align-self: center;
  margin-left: 3.4375rem;
  margin-right: 4rem;
  order: 1;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-left: 1.6531rem;
  }
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 6rem;
  padding: 2.5rem 0;

  box-sizing: content-box;

  &::before {
    content: '';
    position: relative;
    top: calc(50% - 1px);
    display: block;
    height: 1px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    margin-right: -1.875rem;
    order: 2;
    z-index: 3;

    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding-top: 0;
  }

  @media (max-width: 560px) {
    padding-bottom: 1.5rem;
  }
`;
