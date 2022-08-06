/** @jsxImportSource @emotion/react */
import theme from 'theme';
import { css } from '@emotion/react';
import Text from 'components/text';
import { MoreHoriz } from '@emotion-icons/material';

const navbarCss = {
  container: css({
    backgroundColor: theme.colors.background.black,
    padding: `${theme.spacing(6)}px ${theme.spacing(7)}px`,
  }),
  linkContainer: css({
    display: 'flex',
  }),
  link: css({
    marginRight: `${theme.spacing(6)}px`,
    cursor: 'pointer',
  }),
  flexContainer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  moreIcon: css({
    cursor: 'pointer',
    marginLeft: `${theme.spacing(6)}px`,
  }),
};

const links = [
  {
    label: 'WORK',
    href: '#',
  },
  {
    label: 'CULTURE',
    href: '#',
  },
  {
    label: 'SERVICES',
    href: '#',
  },
  {
    label: 'INSIGHTS',
    href: '#',
  },
  {
    label: 'CAREERS',
    href: '#',
  },
  {
    label: 'CONTACT',
    href: '#',
  },
];

const deptLogoUrl =
  'https://www.deptagency.com/wp-content/themes/dept/public/logo-light-new.svg';
const deptUrl = 'https://www.deptagency.com';

const Navbar = () => {
  return (
    <div css={[navbarCss.container, navbarCss.flexContainer]}>
      <a href={deptUrl} target="_blank" rel="noreferrer">
        <img src={deptLogoUrl} alt="dept logo" />
      </a>
      <div css={navbarCss.flexContainer}>
        <div css={navbarCss.linkContainer}>
          {links.map((link) => (
            <Text
              key={link.label}
              color="white"
              css={navbarCss.link}
              underlineOnHover
            >
              {link.label}
            </Text>
          ))}
        </div>
        <MoreHoriz color="white" size={48} css={navbarCss.moreIcon} />
      </div>
    </div>
  );
};

export default Navbar;
