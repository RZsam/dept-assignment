/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'theme';
import Text from 'components/text';
import { Transition } from 'react-transition-group';
import { useState } from 'react';
import LazyLoad from 'react-lazy-load';

const footerCss = {
  container: css({
    backgroundColor: theme.colors.background.black,
    padding: `${theme.spacing(6)}px ${theme.spacing(8)}px`,
  }),
  linkContainer: css({
    display: 'flex',
    marginLeft: theme.spacing(17.5),
  }),
  link: css({
    marginRight: theme.spacing(2.5),
    fontSize: 16,
  }),
  flexContainer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottom: '1px solid',
    borderColor: theme.colors.divider.darkGrey,
    paddingBottom: theme.spacing(7.5),
  }),
  logoLink: css({
    display: 'flex',
  }),
  detailRow: css({
    display: 'flex',
    marginTop: theme.spacing(5.5),
  }),
  firstDetailText: css({
    marginLeft: theme.spacing(0.5),
  }),
  detailText: css({
    marginLeft: theme.spacing(4.5),
  }),
  lastDetailText: css({
    marginRight: theme.spacing(2),
    marginLeft: 'auto',
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

  const handleContentVisible = () => {
    setIsloaded(true);
  };
  return (
    <footer css={footerCss.container}>
      <LazyLoad
        offsetVertical={200}
        onContentVisible={handleContentVisible}
        debounce={false}
        throttle={100}
      >
        <div css={footerCss.flexContainer}>
          <a
            href={deptUrl}
            target="_blank"
            rel="noreferrer"
            css={footerCss.logoLink}
          >
            <img src={deptLogoUrl} alt="dept logo" />
          </a>

          <Transition
            in={isLoaded}
            exit
            appear
            timeout={100}
            unmountOnExit
            classNames="fade"
          >
            {(state) => (
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
  );
};

export default Footer;
