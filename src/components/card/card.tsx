/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC, ReactNode, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { Transition } from 'react-transition-group';
import theme from 'theme';
import mq from 'theme/media-queries';

const cardCss = {
  container: css({
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  }),
  descirptionContainer: css({
    position: 'absolute',
    bottom: theme.spacing(10.5),
    left: theme.spacing(7),
    zIndex: 2,
    [mq('xs')]: css({
      bottom: theme.spacing(3),
      left: theme.spacing(3),
    }),
  }),
  bannerOverlay: css({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .66) 100%);',
  }),
  lazyLoadWrapper: css({
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  }),
  img: css({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }),
};
const defaultStyle = {
  transition: `opacity 300ms ease-in-out`,
  opacity: 0,
};
const textDefaultStyle = {
  transition: `all 500ms ease-in-out`,
  transform: 'translateY(170%)',
};
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 1 },
  unmounted: { opacity: 1 },
};
const textTransitionStyles = {
  entering: { transform: 'translateY(170%)' },
  entered: { transform: 'translateY(0)' },
  exiting: { transform: 'translateY(0)' },
  exited: {},
  unmounted: {},
};
type CardProps = {
  text: ReactNode;
  imgUrl: string;
  height?: number;
};

const Banner: FC<CardProps> = ({ text, imgUrl, height }) => {
  const [isLoaded, setIsloaded] = useState(false);

  const handleContentVisible = () => {
    setIsloaded(true);
  };

  return (
    <div
      css={cardCss.container}
      // style={{
      //   height: height || 568,
      // }}
    >
      <LazyLoad
        offsetVertical={200}
        onContentVisible={handleContentVisible}
        css={cardCss.img}
        debounce={false}
        throttle={100}
      >
        <>
          <Transition in={isLoaded} appear timeout={0}>
            {(state) => (
              <img
                css={cardCss.img}
                src={imgUrl}
                alt="banner"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              />
            )}
          </Transition>
          <div css={cardCss.bannerOverlay} />
          <Transition in={isLoaded} appear timeout={0}>
            {(state) => (
              <div
                css={cardCss.descirptionContainer}
                style={{
                  ...textDefaultStyle,
                  ...textTransitionStyles[state],
                }}
              >
                {text}
              </div>
            )}
          </Transition>
        </>
      </LazyLoad>
    </div>
  );
};

export default Banner;
