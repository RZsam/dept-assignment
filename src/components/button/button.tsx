import styled from '@emotion/styled';
import { FC } from 'react';

interface StyledButtonProps {
  variant?: 'white' | 'black';
}

const StyledButton = styled.button<StyledButtonProps>((props) => ({
  borderRadius: 30,
  textAlign: 'center',
  fontSize: 18,
  border: '1px solid',
  padding: `${props.theme.spacing(2)}px ${props.theme.spacing(8)}px`,
  backgroundColor: props.variant
    ? props.theme.colors.background.black
    : props.theme.colors.background.white,
  boerderColor: props.variant
    ? props.theme.colors.background.black
    : props.theme.colors.background.white,
  color: props.variant
    ? props.theme.colors.background.white
    : props.theme.colors.background.black,
  cursor: 'pointer',
  transition: '200ms',
  '&:hover': {
    backgroundColor: props.variant
      ? props.theme.colors.background.white
      : props.theme.colors.background.black,
    boerderColor: props.variant
      ? props.theme.colors.background.white
      : props.theme.colors.background.black,
    color: props.variant
      ? props.theme.colors.background.black
      : props.theme.colors.background.white,
    transition: '100ms',
  },
}));

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  type?: 'submit' | 'reset';
};

const Button: FC<StyledButtonProps & ButtonProps> = (props) => {
  const { children, disabled, onClick, className, type, variant } = props;

  return (
    <StyledButton
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
      className={className}
      variant={variant}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
