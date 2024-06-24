import { useEffect, useState } from 'react';
import * as S from './styled';

import Logo from '../../assets/shared/logo.svg';

import Navbar from '../Navbar';
import ToggleButton from '../ToggleButton';
import { useLocation } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <S.Header>
      <S.Logo to='/'>
        <img src={Logo} alt='Logo' />
      </S.Logo>
      <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
      <ToggleButton type={'open'} setIsOpen={setIsOpen} />
    </S.Header>
  );
}

export default Header;
