import * as S from './styled';

interface ToggleButtonProps {
  setIsOpen: (value: boolean) => void;
  type: 'open' | 'close';
}

function ToggleButton({ setIsOpen, type }: ToggleButtonProps) {
  return (
    <>
      {type == 'open' ? (
        <S.MenuButton type={type} onClick={() => setIsOpen(true)} />
      ) : (
        <S.MenuButton type={type} onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}

export default ToggleButton;
