import styled from 'styled-components';

import Close from '/assets/shared/icon-close.svg';
import Open from '/assets/shared/icon-hamburger.svg';

type ButtonType = {
  type: 'open' | 'close';
};

export const MenuButton = styled.button<ButtonType>`
  display: none;
  order: 3;

  @media (max-width: 560px) {
    position: absolute;
    top: 2.0625rem;
    right: 1.6531rem;
    display: block;
    align-self: center;
    background-color: transparent;
    background-image: url(${(props) => (props.type == 'open' ? Open : Close)});
    background-repeat: no-repeat;
    background-position: center;
    width: 1.5rem;
    height: 1.3125rem;
    border: none;
    cursor: pointer;
    z-index: url(${(props) => (props.type == 'open' ? '100' : '1000')});
  }
`;
