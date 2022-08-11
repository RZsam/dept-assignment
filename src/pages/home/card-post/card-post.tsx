/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Card as CardType } from 'api/get-data';
import Text from 'components/text';
import Card from 'components/card';
import theme from 'theme';
import { Adjust } from '@emotion-icons/material/Adjust';
import { FC } from 'react';
import mq, { getMaxWidthString } from 'theme/media-queries';
import useMediaQuery from 'hooks/useMediaQuery';

const postsCss = {
  container: css({
    flexBasis: '50%',
    height: 568,
    [mq('md')]: css({
      flexBasis: '100%',
      height: 485,
    }),
  }),
  wideContainer: css({
    flexBasis: '67%',
    height: 568,

    [mq('md')]: css({
      flexBasis: '100%',
      height: 485,
    }),
  }),
  descirption: css({
    fontSize: 48,
    width: '75%',
    [mq('md')]: css({
      fontSize: 26,
      width: '80%',
    }),
  }),
  title: css({
    marginBottom: theme.spacing(3),
    [mq('md')]: css({
      marginBottom: theme.spacing(2),
    }),
  }),
  readMoreContainer: css({
    display: 'inline-flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  }),
  readMore: css({
    marginLeft: theme.spacing(0.5),
    display: 'inline-block',
  }),
};

type CardProps = {
  post: CardType;
};
const Posts: FC<CardProps> = (props) => {
  const { post } = props;
  const isMd = useMediaQuery(getMaxWidthString('md'));

  return (
    <div css={post?.wide ? postsCss.wideContainer : postsCss.container}>
      <Card
        text={
          <div>
            <Text color="white" css={postsCss.title}>
              {post?.client}
            </Text>
            {/* only have focus in xs size */}
            <a href="/" {...(!isMd && { tabIndex: -1 })}>
              <Text color="white" css={postsCss.descirption} underlineOnHover>
                {post?.description}
              </Text>
            </a>
            {!isMd && (
              <div>
                <a href="/" css={postsCss.readMoreContainer}>
                  <Adjust color="white" size={12} />
                  <Text color="white" css={postsCss.readMore}>
                    Read more
                  </Text>
                </a>
              </div>
            )}
          </div>
        }
        imgUrl={post?.imgUrl as string}
      />
    </div>
  );
};

export default Posts;
