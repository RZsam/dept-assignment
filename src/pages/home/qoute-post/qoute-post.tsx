/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Qoute } from 'api/get-data';
import { FC, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { Transition } from 'react-transition-group';
import theme from 'theme';
import Text from 'components/text';
import mq from 'theme/media-queries';

type QoutePost = {
  post: Qoute;
};

const qouteCss = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background.black,
    flexBasis: '100%',
    padding: `${theme.spacing(11.5)}px ${theme.spacing(8)}px`,
    boxSizing: 'border-box',
    [mq('xs')]: css({
      padding: `${theme.spacing(11.5)}px ${theme.spacing(4)}px`,
    }),
  }),
  description: css({
    marginBottom: `${theme.spacing(4)}px`,
    fontSize: 26,
    textAlign: 'center',
  }),
  clientItem: css({
    padding: `${theme.spacing(1.5)}px 0px `,
  }),
  client: css({
    textAlign: 'center',
    fontSize: 18,
  }),
};
const defaultStyle = {
  transition: `opacity 200ms linear`,
  opacity: 0,
};
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 1 },
  unmounted: { opacity: 1 },
};
const ListPost: FC<QoutePost> = (props) => {
  const { post } = props;
  const [isLoaded, setIsloaded] = useState(false);

  const handleContentVisible = () => {
    setIsloaded(true);
  };

  return (
    <div css={qouteCss.container}>
      <LazyLoad
        offsetVertical={100}
        debounce={false}
        throttle={100}
        onContentVisible={handleContentVisible}
      >
        <Transition in={isLoaded} timeout={200}>
          {(state) => (
            <div
              css={[qouteCss.clientItem]}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
                overflow: 'hidden',
              }}
            >
              <Text color="white" css={qouteCss.description}>
                {post.description}
              </Text>
              <Text color="white" css={qouteCss.client}>
                {post.client}
              </Text>
            </div>
          )}
        </Transition>
      </LazyLoad>
    </div>
  );
};

export default ListPost;
