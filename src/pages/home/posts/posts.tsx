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
import Loading from 'components/loading';
import Error from 'components/error';

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
    [mq('md')]: css({
      fontSize: 16,
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
      flexDirection: 'row-reverse',
      backgroundColor: theme.colors.background.black,
    }),
  }),
  borderedText: css({
    borderColor: theme.colors.text.black,
    borderBottom: '1px solid',
    [mq('md')]: css({
      border: 'none',
    }),
  }),
  loadingContainer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  }),
  errorContainer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
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
  const { isLoading, error, data, refetch } = useQuery(['getPosts'], getPost);

  const isMd = useMediaQuery(getMaxWidthString('md'));

  if (isLoading) {
    return (
      <div css={postsCss.loadingContainer}>
        <Loading />
      </div>
    );
  }
  if (error) {
    return (
      <div css={postsCss.errorContainer}>
        <Error description="Oops...! Something went wrong!" onClick={refetch} />
      </div>
    );
  }

  return (
    <div css={postsCss.container}>
      <div css={postsCss.filterContainer}>
        <div>
          <Text color="lightGrey"> Show me </Text>
          <Text color={isMd ? 'white' : 'black'} css={postsCss.borderedText}>
            all work
          </Text>
        </div>
        <div>
          <Text color="lightGrey">in </Text>
          <Text color={isMd ? 'white' : 'black'} css={postsCss.borderedText}>
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
