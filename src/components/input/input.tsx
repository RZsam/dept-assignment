/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import theme from 'theme';

type StyledInputProps = {};

const inputCss = {
  container: css({
    position: 'relative',
  }),
  input: css({
    fontSize: 18,
    padding: theme.spacing(),
    paddingLeft: theme.spacing(0.5),
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    border: 'none',
    borderBottom: '1px solid',
    borderBottomColor: theme.colors.divider.grey,
    transition: '0.2s ease all',
    '&:focus': {
      outline: 'none',
      '~ label': css({
        top: -theme.spacing(2),
        fontSize: '14px',
        color: theme.colors.background.black,
      }),
      borderBottom: 'px solid',
      borderBottomColor: theme.colors.background.black,
    },
    '&:valid': css({
      '~ label': css({
        top: -theme.spacing(2),
        fontSize: '14px',
        color: theme.colors.background.black,
      }),
    }),
  }),
  label: css({
    color: theme.colors.text.lightGrey,
    fontSize: '18px',
    fontWeight: 'normal',
    position: 'absolute',
    pointerEvents: 'none',
    left: '5px',
    top: '10px',
    transition: '0.2s ease all',
  }),
};

type InputProps = React.HTMLProps<HTMLInputElement>;

const Input: FC<StyledInputProps & InputProps> = (props) => {
  const { label, ...otherProps } = props;

  return (
    <div css={inputCss.container}>
      <input css={inputCss.input} {...otherProps} />
      <label css={inputCss.label}>{label}</label>
    </div>
  );
};

export default Input;
