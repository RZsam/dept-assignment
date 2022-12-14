/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { List } from 'api/get-data';
import { FC, useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { Transition } from 'react-transition-group';
import theme from 'theme';
import Text from 'components/text';
import { Adjust } from '@emotion-icons/material/Adjust';
import mq, { getMaxWidthString } from 'theme/media-queries';
import useMediaQuery from 'hooks/useMediaQuery';

type ListPostProps = {
  post: List;
};

const listCss = {
  container: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.colors.background.black,
    flexBasis: '33%',
    padding: theme.spacing(4),
    boxSizing: 'border-box',
    [mq('md')]: css({
      flexBasis: '100%',
      padding: theme.spacing(3),
    }),
  }),
  description: css({
    margin: `${theme.spacing(1.5)}px 0px `,
    [mq('md')]: css({
      margin: 0,
      marginTop: theme.spacing(2),
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
  const isMd = useMediaQuery(getMaxWidthString('md'));

  const handleContentVisible = () => {
    setIsloaded(true);
  };
  const list = isMd ? post?.list?.slice(0, 2) : post?.list;
  return (
    <div css={listCss.container}>
      <LazyLoad
        offsetVertical={100}
        debounce={false}
        throttle={100}
        onContentVisible={handleContentVisible}
      >
        <>
          {list?.map((clientItem, index) => (
            <Transition in={isLoaded} timeout={100 + 70 * index} key={index}>
              {(state) => (
                <div
                  css={[
                    index !== (list?.length as number) - 1 &&
                      listCss.clientItemBorder,
                    listCss.clientItem,
                  ]}
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                    overflow: 'hidden',
                  }}
                >
                  {/* only have focus in xs size */}
                  <a href="/" {...(!isMd && { tabIndex: -1 })}>
                    <Text color="white">{clientItem.client}</Text>
                  </a>
                  <Text color="white" css={listCss.description}>
                    {clientItem.description}
                  </Text>
                  {!isMd && (
                    <a href="/" css={listCss.readMoreContainer}>
                      <Adjust color="white" size={12} />
                      <Text color="white" css={listCss.readMore}>
                        Read more
                      </Text>
                    </a>
                  )}
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
