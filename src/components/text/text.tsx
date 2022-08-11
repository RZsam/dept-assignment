import styled from '@emotion/styled';
import useMediaQuery from 'hooks/useMediaQuery';
import { CSSProperties, FC, ReactNode } from 'react';
import { getMaxWidthString } from 'theme/media-queries';

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
    display: 'inline',
    textDecoration: 'none',
    backgroundImage: `linear-gradient(${
      props?.color
        ? props.theme.colors.text[props?.color]
        : props.theme.colors.text.black
    },${
      props?.color
        ? props.theme.colors.text[props?.color]
        : props.theme.colors.text.black
    })`,
    backgroundPosition: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '0 1px',
    transition: 'background-size .3s',
    '&:hover,&:hover': {
      backgroundSize: '100% 1px',
      backgroundPosition: '0 100%',
    },
  }),
}));

type TextProps = StyledPProps & {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
};

const Text: FC<TextProps> = (props) => {
  const { children, className, underlineOnHover, ...rest } = props;
  const isXs = useMediaQuery(getMaxWidthString('xs'));

  return (
    <StyledP
      className={className}
      underlineOnHover={underlineOnHover && !isXs}
      {...rest}
    >
      {children}
    </StyledP>
  );
};

export default Text;
