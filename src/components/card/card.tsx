/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC, ReactNode, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { Transition } from 'react-transition-group';
import theme from 'theme';

const bannerCss = {
  container: css({
    width: '100%',
    height: 628,
    marginTop: 120,
    position: 'relative',
    overflow: 'hidden',
  }),
  descirptionContainer: css({
    position: 'absolute',
    bottom: theme.spacing(10.5),
    left: theme.spacing(7),
    width: '35%',
    zIndex: 2,
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
type BannerProps = {
  text: ReactNode;
};

const Banner: FC<BannerProps> = ({ text }) => {
  const [isLoaded, setIsloaded] = useState(false);

  const handleContentVisible = () => {
    setIsloaded(true);
  };

  return (
    <div>
      <div css={bannerCss.container}>
        <LazyLoad
          offsetVertical={500}
          onContentVisible={handleContentVisible}
          css={bannerCss.img}
        >
          <>
            <Transition in={isLoaded} appear timeout={0}>
              {(state) => (
                <img
                  css={bannerCss.img}
                  src="https://s3-alpha-sig.figma.com/img/d144/e347/ca2df6a6b07764f9c1fd0656877bdb26?Expires=1660521600&Signature=MPNl0I5KZdJwDCwO~smvAzwDUo69IFfNIDGlgR0DmC4ijQcVlzpV1tTKexlE3vlyjW5Vcaltez93foE0mIFlLXXMv0FshIAg1S-DQ7WizQyIG0xIFx5Qw35RJ9kFRNxb6monNUSgsFRIyJ-UqellmkodtewQtaVamWPmH2uIPGYpzh-91DI7h2OdOY1kK0o2Acnw0RExrAWf4TaoQ4qDsRcuhMiE1W6EYnF6PaL2zhYL2whnIQGEKwL3vOjyPOJ5m2~Q5sTbjubapamUrj2qrRhPvubeKLa9EmxpYXYjofitlmA39caT~64ocXNpdkjKQw-sP4ZDTI1NK~95HQwQIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt="banner"
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                />
              )}
            </Transition>
            <div css={bannerCss.bannerOverlay} />
            <Transition in={isLoaded} appear timeout={0}>
              {(state) => (
                <div
                  css={bannerCss.descirptionContainer}
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
    </div>
  );
};

export default Banner;
