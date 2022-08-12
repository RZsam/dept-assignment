/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import theme from 'theme';

const loadingCss = {
  ellipsis: css({
    display: 'inline-block',
    position: 'relative',
    width: 80,
    transform: 'scale(1.5)',
    height: 80,

    div: css({
      position: 'absolute',
      top: 33,
      width: 13,
      height: 13,
      borderRadius: '50%',
      animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
      '&:nth-child(1)': {
        left: 8,
        animation: 'lds-ellipsis1 0.6s infinite',
      },
      '&:nth-child(2)': {
        left: 8,
        animation: 'lds-ellipsis2 0.6s infinite',
      },
      '&:nth-child(3)': {
        left: 32,
        animation: 'lds-ellipsis2 0.6s infinite',
      },
      '&:nth-child(4)': {
        left: 56,
        animation: 'lds-ellipsis3 0.6s infinite',
      },
      '@keyframes lds-ellipsis1': {
        '0%': { transform: 'scale(0)' },
        '100%': { transform: 'scale(1)' },
      },
      '@keyframes lds-ellipsis3': {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(0)' },
      },
      '@keyframes lds-ellipsis2': {
        '0%': { transform: 'translate(0, 0)' },
        '100%': { transform: 'translate(24px, 0)' },
      },
    }),
  }),
  whiteEllipsis: css({
    div: css({
      backgroundColor: theme.colors.background.white,
    }),
  }),
  blackEllipsis: css({
    div: css({
      backgroundColor: theme.colors.background.black,
    }),
  }),
};

type LoadingProps = {
  color?: 'black' | 'white';
};
const Loading: FC<LoadingProps> = (props) => {
  const { color } = props;
  return (
    <div
      css={[
        loadingCss.ellipsis,
        color === 'white' ? loadingCss.whiteEllipsis : loadingCss.blackEllipsis,
      ]}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
