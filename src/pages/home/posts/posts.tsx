/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import getData from 'api/get-data';
import Text from 'components/text';
import CardPost from '../card-post';
import theme from 'theme';

const postsCss = {
  container: css({
    display: 'flex',
    flexWrap: 'wrap',
  }),
};

const Posts = () => {
  const { isLoading, error, data } = useQuery(['repoData'], getData);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <div css={postsCss.container}>
      {data?.map((post, index) => {
        if (post.type === 'card') return <CardPost post={post} key={index} />;
        else return 'list';
      })}
    </div>
  );
};

export default Posts;
