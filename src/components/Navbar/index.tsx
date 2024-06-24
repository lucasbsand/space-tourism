import ToggleButton from '../ToggleButton';
import * as S from './styled';

interface NavbarProps {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}

function Navbar({ setIsOpen, isOpen }: NavbarProps) {
  const navItems = [
    { id: '00', label: 'HOME', path: '/' },
    { id: '01', label: 'DESTINATION', path: '/destination' },
    { id: '02', label: 'CREW', path: '/crew' },
    { id: '03', label: 'TECHNOLOGY', path: '/technology' },
  ];

  return (
    <S.NavBar isOpen={isOpen}>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <S.NavBarLink to={item.path}>
              <span>{item.id}</span>
              {item.label}
            </S.NavBarLink>
          </li>
        ))}
      </ul>
      <ToggleButton type={'close'} setIsOpen={setIsOpen} />
    </S.NavBar>
  );
}

export default Navbar;
