/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Text from 'components/text';
import Card from 'components/card';
import theme from 'theme';

const bannerCss = {
  descirption: css({
    fontSize: 34,
  }),
  title: css({
    marginBottom: theme.spacing(3),
  }),
};

const Banner = () => {
  return (
    <Card
      text={
        <>
          <Text color="white" css={bannerCss.title}>
            work
          </Text>
          <Text color="white" css={bannerCss.descirption}>
            A selection of projects that <b>pioneer</b> <b>tech</b> and
            <b>marketing</b> to help brands stay ahead.
          </Text>
        </>
      }
    />
  );
};

export default Banner;
