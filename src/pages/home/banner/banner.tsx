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
      height={628}
      imgUrl="https://s3-alpha-sig.figma.com/img/d144/e347/ca2df6a6b07764f9c1fd0656877bdb26?Expires=1660521600&Signature=MPNl0I5KZdJwDCwO~smvAzwDUo69IFfNIDGlgR0DmC4ijQcVlzpV1tTKexlE3vlyjW5Vcaltez93foE0mIFlLXXMv0FshIAg1S-DQ7WizQyIG0xIFx5Qw35RJ9kFRNxb6monNUSgsFRIyJ-UqellmkodtewQtaVamWPmH2uIPGYpzh-91DI7h2OdOY1kK0o2Acnw0RExrAWf4TaoQ4qDsRcuhMiE1W6EYnF6PaL2zhYL2whnIQGEKwL3vOjyPOJ5m2~Q5sTbjubapamUrj2qrRhPvubeKLa9EmxpYXYjofitlmA39caT~64ocXNpdkjKQw-sP4ZDTI1NK~95HQwQIQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
      text={
        <>
          <Text color="white" css={bannerCss.title}>
            work
          </Text>
          <Text color="white" css={bannerCss.descirption} underlineOnHover>
            A selection of projects that <b>pioneer</b> <b>tech</b> and
            <b>marketing</b> to help brands stay ahead.
          </Text>
        </>
      }
    />
  );
};

export default Banner;
