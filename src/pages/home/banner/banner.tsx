/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Text from 'components/text';
import Card from 'components/card';
import theme from 'theme';
import mq, { getMaxWidthString } from 'theme/media-queries';
import useMediaQuery from 'hooks/useMediaQuery';

const bannerCss = {
  continer: css({
    marginTop: 120,
    height: 628,
  }),
  xsContainer: css({
    marginTop: 50,
    height: 415,
  }),
  descirptionContainer: css({
    width: '50%',
    [mq('md')]: css({
      width: '90%',
    }),
  }),
  descirption: css({
    fontSize: 34,
  }),
  title: css({
    marginBottom: theme.spacing(3),
  }),
};

const Banner = () => {
  const isMd = useMediaQuery(getMaxWidthString('md'));

  return (
    <div css={isMd ? bannerCss.xsContainer : bannerCss.continer}>
      <Card
        imgUrl="https://s3-alpha-sig.figma.com/img/d144/e347/ca2df6a6b07764f9c1fd0656877bdb26?Expires=1661731200&Signature=eNhvxVio-8h1OUJ3iZS4V9SfejWD8c1cEo2wFwNpYYeD5bXEDZIqFCBpDZXFvGoZi9tbedl11Wcsje1sYWWmyM5zi4GRkFR2px5vIUkG-VweVaKdGCvUVQDK8dWVVzMGy3umeMhFsT0RdmizSSePJ6VJjUKbqlLYdvbZ6ZK-2me5JRfzV3DqDvClTApkzgKfHxxxLtwAed6UCMTiGmUuCm9Br2B1xk6M79IK7dmDMhiXOHfn6AZwwYsqNIDT6Hd7aaVa7lCbSDlCGTs0l5MmzJ41ekB8uVJztZAJQBvczwDgYQdfnVbROHnpiFVUkkE6jqYXlOZ7kp2ZcgBzuUmH-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        text={
          <>
            <Text color="white" css={bannerCss.title}>
              work
            </Text>
            <div css={bannerCss.descirptionContainer}>
              <Text color="white" css={bannerCss.descirption} underlineOnHover>
                A selection of projects that <b>pioneer</b> <b>tech</b> and
                <b>marketing</b> to help brands stay ahead.
              </Text>
            </div>
          </>
        }
      />
    </div>
  );
};

export default Banner;
