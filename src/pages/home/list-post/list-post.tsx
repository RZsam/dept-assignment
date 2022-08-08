/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { List } from 'api/get-data';
import { FC, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { Transition } from 'react-transition-group';
import theme from 'theme';
import Text from 'components/text';
import { Adjust } from '@emotion-icons/material/Adjust';

type ListPostProps = {
  post: List;
};

const listCss = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.colors.background.black,
    flexBasis: '33%',
    padding: `${theme.spacing(9)}px ${theme.spacing(4)}px`,
    boxSizing: 'border-box',
  }),
  description: css({
    margin: `${theme.spacing(1.5)}px 0px `,
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
  clientItem: css({
    padding: `${theme.spacing(1.5)}px 0px `,
  }),
  clientItemBorder: css({
    borderBottom: '1px solid',
    borderColor: theme.colors.divider.grey,
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
const ListPost: FC<ListPostProps> = (props) => {
  const { post } = props;
  const [isLoaded, setIsloaded] = useState(false);

  const handleContentVisible = () => {
    setIsloaded(true);
  };

  return (
    <div css={listCss.container}>
      <LazyLoad
        offsetVertical={100}
        debounce={false}
        throttle={100}
        onContentVisible={handleContentVisible}
      >
        <>
          {post?.list?.map((clientItem, index) => (
            <Transition in={isLoaded} timeout={100 + 70 * index}>
              {(state) => (
                <div
                  key={index}
                  css={[
                    index !== (post?.list?.length as number) - 1 &&
                      listCss.clientItemBorder,
                    listCss.clientItem,
                  ]}
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                    overflow: 'hidden',
                  }}
                >
                  <Text color="white">{clientItem.client}</Text>
                  <Text color="white" css={listCss.description}>
                    {clientItem.description}
                  </Text>
                  <a href="/" css={listCss.readMoreContainer}>
                    <Adjust color="white" size={12} />
                    <Text color="white" css={listCss.readMore}>
                      Read more
                    </Text>
                  </a>
                </div>
              )}
            </Transition>
          ))}
        </>
      </LazyLoad>
    </div>
  );
};

export default ListPost;