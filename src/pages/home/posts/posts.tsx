/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { getPost, Post } from 'api/get-data';
import Text from 'components/text';
import CardPost from '../card-post';
import ListPost from '../list-post';
import QoutePost from '../qoute-post';
import { v4 as uuidv4 } from 'uuid';
import theme from 'theme';
import mq, { getMaxWidthString } from 'theme/media-queries';
import useMediaQuery from 'hooks/useMediaQuery';

const postsCss = {
  container: css({}),
  postContainer: css({
    display: 'flex',
    flexWrap: 'wrap',
  }),
  filterContainer: css({
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    p: css({
      display: 'inline',
    }),
    [mq('xs')]: css({
      fontSize: 16,
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
      flexDirection: 'row-reverse',
      backgroundColor: theme.colors.background.black,
    }),
  }),
  borderedText: css({
    borderColor: theme.colors.text.black,
    borderBottom: '1px solid',
    [mq('xs')]: css({
      border: 'none',
    }),
  }),
};

const renderPost = (post: Post) => {
  const id = uuidv4();
  switch (post.type) {
    case 'card':
      return <CardPost post={post} key={id} />;
    case 'list':
      return <ListPost post={post} key={id} />;
    case 'qoute':
      return <QoutePost post={post} key={id} />;
  }
};

const Posts = () => {
  const { isLoading, error, data } = useQuery(['repoData'], getPost);

  const isXs = useMediaQuery(getMaxWidthString('xs'));

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>oops...! please try again!</Text>;
  }

  return (
    <div css={postsCss.container}>
      <div css={postsCss.filterContainer}>
        <div>
          <Text color="lightGrey"> Show me </Text>
          <Text color={isXs ? 'white' : 'black'} css={postsCss.borderedText}>
            all work
          </Text>
        </div>
        <div>
          <Text color="lightGrey">in </Text>
          <Text color={isXs ? 'white' : 'black'} css={postsCss.borderedText}>
            all industries
          </Text>
        </div>
      </div>
      <div css={postsCss.postContainer}>
        {data?.map((post) => renderPost(post))}
      </div>
    </div>
  );
};

export default Posts;
