/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import LazyLoad from 'react-lazy-load';
import { FC, ImgHTMLAttributes, useState } from 'react';
import Transition from 'react-transition-group/Transition';

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const imgCss = {
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

const Img: FC<ImgProps> = (props) => {
  const { src, alt, ...otherProps } = props;
  const [isLoaded, setIsloaded] = useState(false);

  const handleContentVisible = () => {
    setIsloaded(true);
  };
  const defaultStyle = {
    transition: `opacity 300ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 1 },
    unmounted: { opacity: 0 },
  };

  return (
    <LazyLoad
      offsetVertical={500}
      onContentVisible={handleContentVisible}
      css={imgCss.img}
    >
      <Transition in={isLoaded} appear timeout={0}>
        {(state) => (
          <img
            css={imgCss.img}
            src={src}
            alt={alt}
            {...otherProps}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          />
        )}
      </Transition>
    </LazyLoad>
  );
};

export default Img;
