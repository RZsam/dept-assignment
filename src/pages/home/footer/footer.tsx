/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'theme';
import Text from 'components/text';
import { Transition } from 'react-transition-group';
import { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import mq, { getMaxWidthString } from 'theme/media-queries';
import useMediaQuery from 'hooks/useMediaQuery';
import { ReactComponent as Facebook } from 'assets/svg/facebook.svg';
import { ReactComponent as Twitter } from 'assets/svg/twitter.svg';
import { ReactComponent as Instagram } from 'assets/svg/instagram.svg';
import { North as UpArrow } from '@emotion-icons/material';

const footerCss = {
  container: css({ display: 'flex' }),
  footer: css({
    flexGrow: 1,
    backgroundColor: theme.colors.background.black,
    padding: `${theme.spacing(6)}px ${theme.spacing(8)}px`,
    [mq('md')]: css({
      padding: `${theme.spacing(5.5)}px ${theme.spacing(4.5)}px`,
    }),
  }),
  linkContainer: css({
    display: 'flex',
    marginLeft: theme.spacing(17.5),
    [mq('md')]: css({
      flexDirection: 'column',
      marginLeft: theme.spacing(0),
    }),
  }),
  link: css({
    marginRight: theme.spacing(2.5),
    fontSize: 16,
    [mq('md')]: css({
      fontSize: 18,
      marginBottom: theme.spacing(6),
    }),
  }),
  flexContainer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottom: '1px solid',
    borderColor: theme.colors.divider.darkGrey,
    paddingBottom: theme.spacing(7.5),
    [mq('md')]: css({
      justifyContent: 'space-between',
    }),
  }),
  logoLink: css({
    display: 'flex',
  }),
  detailRow: css({
    display: 'flex',
    marginTop: theme.spacing(5.5),
    [mq('md')]: css({
      flexDirection: 'column',
    }),
  }),
  firstDetailText: css({
    marginLeft: theme.spacing(0.5),
    [mq('md')]: css({
      marginLeft: 0,
    }),
  }),
  detailText: css({
    marginLeft: theme.spacing(4.5),
    [mq('md')]: css({
      marginLeft: 0,
    }),
  }),
  lastDetailText: css({
    marginRight: theme.spacing(2),
    marginLeft: 'auto',
    [mq('md')]: css({
      marginLeft: 0,
      marginTop: theme.spacing(3),
    }),
  }),
  xsSocialIcon: css({
    marginBottom: theme.spacing(5),
  }),
  scrollToTopContainer: css({
    backgroundColor: theme.colors.background.white,
    flexBasis: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }),
  scrollToTopButton: css({
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  }),
};

const links = [
  {
    label: 'WORK',
    href: 'work',
  },
  {
    label: 'SERVICES',
    href: 'services',
  },
  {
    label: 'STORIES',
    href: 'stories',
  },
  {
    label: 'ABOUT',
    href: 'about',
  },
  {
    label: 'CAREERS',
    href: 'careers',
  },
  {
    label: 'CONTACT',
    href: 'contact',
  },
];
const transitions = {
  entering: {},
  entered: {
    opacity: 1,
  },
  exiting: {
    opacity: 0,
  },
  exited: {
    opacity: '0',
  },
  unmounted: {},
};
const defaultStyle = {
  transition: `opacity 200ms ease-in-out`,
  opacity: 0,
};
const deptLogoUrl =
  'https://www.deptagency.com/wp-content/themes/dept/public/logo-light-new.svg';
const deptUrl = 'https://www.deptagency.com';

const Footer = () => {
  const [isLoaded, setIsloaded] = useState(false);
  const isMd = useMediaQuery(getMaxWidthString('md'));

  const handleContentVisible = () => {
    setIsloaded(true);
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div css={footerCss.container}>
      <footer css={footerCss.footer}>
        <LazyLoad
          offsetVertical={200}
          onContentVisible={handleContentVisible}
          debounce={false}
          throttle={100}
        >
          <div css={footerCss.flexContainer}>
            {!isMd && (
              <a
                href={deptUrl}
                target="_blank"
                rel="noreferrer"
                css={footerCss.logoLink}
              >
                <img src={deptLogoUrl} alt="dept logo" />
              </a>
            )}
            <Transition
              in={isLoaded}
              exit
              appear
              timeout={100}
              unmountOnExit
              classNames="fade"
            >
              {(state) => (
                <>
                  <div
                    css={footerCss.linkContainer}
                    style={{
                      ...defaultStyle,
                      ...transitions[state],
                    }}
                  >
                    {links.map((link) => (
                      <a href={link.href} css={footerCss.link} key={link.href}>
                        <Text color="white" underlineOnHover>
                          {link.label}
                        </Text>
                      </a>
                    ))}
                  </div>
                  {isMd && (
                    <div css={footerCss.linkContainer}>
                      <a href="/" css={footerCss.xsSocialIcon}>
                        <Facebook />
                      </a>
                      <a href="/" css={footerCss.xsSocialIcon}>
                        <Twitter />
                      </a>
                      <a href="/" css={footerCss.xsSocialIcon}>
                        <Instagram />
                      </a>
                    </div>
                  )}
                </>
              )}
            </Transition>
          </div>
        </LazyLoad>
        <div css={footerCss.detailRow}>
          <Text color="grey" css={footerCss.firstDetailText}>
            Chamber of Commerce: 63464101
          </Text>
          <Text color="grey" css={footerCss.detailText}>
            VAT: NL 8552.47.502.B01
          </Text>
          <Text color="grey" css={footerCss.detailText}>
            Terms and conditions
          </Text>
          <Text color="grey" css={footerCss.lastDetailText}>
            © 2022 Dept Agency
          </Text>
        </div>
      </footer>
      {!isMd && (
        <div css={footerCss.scrollToTopContainer}>
          <button css={footerCss.scrollToTopButton} onClick={scrollTop}>
            <UpArrow color="black" size={24} />
            <Text color="black">TOP</Text>
          </button>
        </div>
      )}
    </div>
  );
};

export default Footer;
