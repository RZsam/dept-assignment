/** @jsxImportSource @emotion/react */
import theme from 'theme';
import { css } from '@emotion/react';
import Text from 'components/text';
import { Clear, MoreHoriz, PlayArrow } from '@emotion-icons/material';
import { useEffect, useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import Select from 'components/select';
import { OptionType } from 'components/select/select';
import mq, { getMaxWidthString } from 'theme/media-queries';
import useMediaQuery from 'hooks/useMediaQuery';

const navbarCss = {
  container: css({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.background.black,
    padding: `${theme.spacing(6)}px ${theme.spacing(7)}px`,
    transition: '300ms',
    alignItems: 'flex-start',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    zIndex: 10,
    [mq('xs')]: css({
      padding: `${theme.spacing(2)}px ${theme.spacing(2.5)}px`,
      backgroundColor: theme.colors.background.white,
      alignContent: 'flex-start',
    }),
  }),
  blackBG: css({
    transition: '300ms',
    backgroundColor: `${theme.colors.background.black} !important`,
  }),
  linkContainer: css({
    display: 'flex',
    marginLeft: 'auto',
  }),
  link: css({
    marginRight: `${theme.spacing(6)}px`,
    fontSize: 18,
  }),
  flexContainer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  moreIcon: css({
    marginLeft: `${theme.spacing(6)}px`,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    height: 16,
    display: 'flex',
    alignItems: 'center',
    padding: 0,
  }),
  logoLink: css({
    display: 'flex',
  }),
  clearIcon: css({
    width: 48,
  }),
  openNavbar: css({
    height: '100vh',
  }),
  closeNavbar: css({
    height: 24,
    [mq('xs')]: css({
      height: 18,
    }),
  }),
  openedNavbar: css({
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    alignItems: 'flex-end',
    position: 'relative',
    [mq('xs')]: css({
      marginTop: theme.spacing(9),
    }),
  }),
  openedNavbarLinkContainer: css({
    borderBottom: 'solid 1px',
    borderColor: '#A3A3A3',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  }),
  openedNavbarLink: css({
    fontSize: 60,
    textDecoration: 'none',
    flexGrow: 0,
    display: 'flex',
    alignItems: 'center',
    [mq('xs')]: css({
      fontSize: 34,
    }),
  }),
  selectContainer: css({
    position: 'absolute',
    left: -1,
    top: theme.spacing(2),
    zIndex: 1,
    width: 165,
  }),
  menuTextBtn: css({
    border: 'none',
    backgroundColor: 'transparent',
  }),
};

const links = [
  {
    label: 'HOME',
    href: 'home',
  },
  {
    label: 'WORK',
    href: 'work',
  },
  {
    label: 'CULTURE',
    href: 'culture',
  },
  {
    label: 'SERVICES',
    href: 'services',
  },
  {
    label: 'INSIGHTS',
    href: 'insights',
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

const navBarOptions = [
  { label: 'GLOBAL', value: 'global' },
  { label: 'NEDERLAND', value: 'nederland' },
  { label: 'UNITED STATES', value: 'united states' },
  { label: 'IRELAND', value: 'ireland' },
  { label: 'UNITED KINGDOM', value: 'united kingdom' },
  { label: 'DEUTSCHLAND', value: 'deutschland' },
  { label: 'SCHWEIZ', value: 'schweiz' },
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
  unmounted: {
    opacity: '0',
    display: 'none',
  },
};

const deptLogoUrl =
  'https://www.deptagency.com/wp-content/themes/dept/public/logo-light-new.svg';
const deptDarkLogoUrl =
  'https://www.deptagency.com/wp-content/themes/dept/public/logo-dark-new.svg';

const deptUrl = 'https://www.deptagency.com';

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [landen, setLanden] = useState<OptionType>(navBarOptions[0]);

  const currentRoute = useRef('');

  const isXs = useMediaQuery(getMaxWidthString('xs'));

  const handleOpenNavbar = () => {
    setIsopen((isOpen) => !isOpen);
  };

  useEffect(() => {
    // since there is one route , react-router-dom was not used
    currentRoute.current = window.location.pathname.slice(1) || 'home';
  }, []);

  const handleLand = (value: OptionType | null) => {
    if (value) {
      setLanden(value);
    }
  };

  return (
    <div
      css={[
        navbarCss.container,
        isOpen ? navbarCss.openNavbar : navbarCss.closeNavbar,
        isXs && isOpen && navbarCss.blackBG,
      ]}
    >
      <a
        href={deptUrl}
        target="_blank"
        rel="noreferrer"
        css={navbarCss.logoLink}
      >
        <img
          src={isXs && !isOpen ? deptDarkLogoUrl : deptLogoUrl}
          alt="dept logo"
        />
      </a>

      {!isXs && (
        <Transition
          in={!isOpen}
          exit
          appear
          timeout={200}
          unmountOnExit
          classNames="fade"
        >
          {(state) => (
            <div
              css={navbarCss.linkContainer}
              style={{
                transition: 'all .2s',
                ...transitions[state],
              }}
            >
              {links
                .filter((link) => link.href !== currentRoute.current)
                .map((link) => (
                  <a href={link.href} css={navbarCss.link} key={link.href}>
                    <Text color="white" underlineOnHover>
                      {link.label}
                    </Text>
                  </a>
                ))}
            </div>
          )}
        </Transition>
      )}

      {isXs &&
        (isOpen ? (
          <button css={navbarCss.moreIcon} onClick={handleOpenNavbar}>
            <Clear color="white" size={24} css={navbarCss.clearIcon} />
          </button>
        ) : (
          <button onClick={handleOpenNavbar} css={navbarCss.menuTextBtn}>
            <Text>MENU</Text>
          </button>
        ))}
      {!isXs && (
        <button css={navbarCss.moreIcon} onClick={handleOpenNavbar}>
          {isOpen ? (
            <Clear color="white" size={24} css={navbarCss.clearIcon} />
          ) : (
            <MoreHoriz color="white" size={48} />
          )}
        </button>
      )}
      <div css={navbarCss.openedNavbar}>
        {!isXs && (
          <Transition
            in={isOpen}
            exit
            appear
            timeout={100}
            unmountOnExit
            classNames="fade"
          >
            {(state) => (
              <div
                css={navbarCss.selectContainer}
                style={{
                  transition: 'all .2s',
                  ...transitions[state],
                }}
              >
                <Select
                  options={navBarOptions}
                  onChange={handleLand}
                  defaultValue={navBarOptions[0]}
                  value={landen}
                  label="Landen"
                />
              </div>
            )}
          </Transition>
        )}

        {links.map((link) => (
          <Transition
            in={isOpen}
            exit
            appear
            timeout={100}
            unmountOnExit
            classNames="fade"
            key={link.href}
          >
            {(state) => (
              <div
                key={link.label}
                css={navbarCss.openedNavbarLinkContainer}
                style={{
                  transition: 'all .2s',
                  ...transitions[state],
                }}
              >
                <a href={link.href} css={navbarCss.openedNavbarLink}>
                  {link.href === currentRoute.current && (
                    <PlayArrow color="white" size={isXs ? 32 : 64} />
                  )}
                  <Text color="white">{link.label}</Text>
                </a>
              </div>
            )}
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
