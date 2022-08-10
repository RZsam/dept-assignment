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
    [mq('xs')]: css({
      flexBasis: '100%',
    }),
  }),
  wideContainer: css({
    flexBasis: '67%',
    [mq('xs')]: css({
      flexBasis: '100%',
    }),
  }),
  descirption: css({
    fontSize: 48,
    width: '75%',
    [mq('xs')]: css({
      fontSize: 26,
      width: '80%',
    }),
  }),
  title: css({
    marginBottom: theme.spacing(3),
    [mq('xs')]: css({
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
  const isXs = useMediaQuery(getMaxWidthString('xs'));

  return (
    <div css={post?.wide ? postsCss.wideContainer : postsCss.container}>
      <Card
        text={
          <div>
            <Text color="white" css={postsCss.title}>
              {post?.client}
            </Text>
            {/* not to focus in desktop mode */}
            <a href="/" {...(!isXs && { tabIndex: -1 })}>
              <Text
                color="white"
                css={postsCss.descirption}
                underlineOnHover={!isXs}
              >
                {post?.description}
              </Text>
            </a>
            {!isXs && (
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
