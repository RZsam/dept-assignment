/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import theme from 'theme';

type StyledInputProps = {};

const textAreaCss = {
  container: css({
    position: 'relative',
  }),
  input: css({
    resize: 'none',
    fontSize: 18,
    padding: theme.spacing(),
    paddingLeft: theme.spacing(0.5),
    display: 'block',
    width: '300px',
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

type TextAreaProps = React.HTMLProps<HTMLTextAreaElement>;

const TextArea: FC<StyledInputProps & TextAreaProps> = (props) => {
  const { value, onChange, label, ...otherProps } = props;

  return (
    <div css={textAreaCss.container}>
      <textarea css={textAreaCss.input} required {...otherProps} />
      <label css={textAreaCss.label}>{label}</label>
    </div>
  );
};

export default TextArea;
