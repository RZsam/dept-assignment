import styled from '@emotion/styled';
import { FC } from 'react';

interface StyledPProps {
  color?: 'white' | 'grey' | 'black' | 'lightGrey' | 'danger';
  underlineOnHover?: boolean;
}

const StyledP = styled.p<StyledPProps>((props) => ({
  color: props?.color
    ? props.theme.colors.text[props?.color]
    : props.theme.colors.text.black,
  margin: 0,
  ...(props?.underlineOnHover && {
    display: 'inline-block',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      transform: 'scaleX(0)',
      height: 1,
      bottom: 0,
      left: 0,
      backgroundColor: props?.color
        ? props.theme.colors.text[props?.color]
        : props.theme.colors.text.black,
      transformOrigin: 'bottom right',
      transition: 'transform 0.25s ease-out',
    },
    '&:hover': {
      '&:after': {
        transform: 'scaleX(1)',
        transformOrigin: 'bottom left',
      },
    },
  }),
}));

type TextProps = StyledPProps & {
  className?: string;
  children: string | number;
};

const Text: FC<TextProps> = (props) => {
  const { children, className, ...rest } = props;
  return (
    <StyledP className={className} {...rest}>
      {children}
    </StyledP>
  );
};

export default Text;
