/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { getPost, Post } from 'api/get-data';
import Text from 'components/text';
import CardPost from '../card-post';
import ListPost from '../list-post';
import QoutePost from '../qoute-post';
import { v4 as uuidv4 } from 'uuid';

const postsCss = {
  container: css({
    display: 'flex',
    flexWrap: 'wrap',
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

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>oops...! please try again!</Text>;
  }

  return (
    <div css={postsCss.container}>{data?.map((post) => renderPost(post))}</div>
  );
};

export default Posts;
