/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { getClient } from 'api/get-data';
import Text from 'components/text';
import theme from 'theme';
import Img from 'components/img';
import mq, { getMaxWidthString, getMinWidthString } from 'theme/media-queries';
import useMediaQuery from 'hooks/useMediaQuery';
import Loading from 'components/loading';
import Error from 'components/error';

const clientCss = {
  container: css({
    display: 'flex',
    flexWrap: 'wrap',
    padding: `${theme.spacing(5)}px ${theme.spacing(11.5)}px `,
    backgroundColor: theme.colors.background.black,
    [mq('sm')]: css({
      padding: `${theme.spacing(11.5)}px ${theme.spacing(3)}px `,
      paddingBottom: theme.spacing(4),
    }),
  }),
  title: css({
    fontSize: 34,
    marginBottom: theme.spacing(4),
  }),
  description: css({ fontSize: 18, marginBottom: theme.spacing(8) }),
  logoContainer: {
    width: 170,
    height: 90,
    [mq('xs')]: css({
      height: 80,
      width: 115,
    }),
  },
  clientsLogoContainer: css({
    display: 'flex',
    flexWrap: 'wrap',
    padding: `0 ${theme.spacing(28)}px`,
    [`@media only screen and ${getMaxWidthString('lg')} and ${getMinWidthString(
      'sm',
    )}`]: css({
      padding: `0 ${theme.spacing(2)}px`,
    }),
    [mq('sm')]: css({
      padding: 0,
    }),
  }),
  noMargin: css({
    marginBottom: 0,
  }),
  midLogo: css({ margin: `0 ${theme.spacing(30)}px` }),
  column: css({
    flexBasis: '33%',
    marginBottom: theme.spacing(10),
    [mq('xs')]: css({
      flexBasis: '50%',
      img: {
        objectFit: 'contain',
      },
    }),
  }),
  flexStart: css({ display: 'flex', justifyContent: 'flex-start' }),
  flexCenter: css({ display: 'flex', justifyContent: 'center' }),
  flexEnd: css({ display: 'flex', justifyContent: 'flex-end' }),
  loadingContainer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background.black,
    height: 150,
  }),
  errorContainer: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background.black,
  }),
};

const Clients = () => {
  const { isLoading, error, data, refetch } = useQuery(
    ['getClients'],
    getClient,
  );
  const isXs = useMediaQuery(getMaxWidthString('xs'));

  if (isLoading) {
    return (
      <div css={clientCss.loadingContainer}>
        <Loading color="white" />
      </div>
    );
  }
  if (error) {
    return (
      <div css={clientCss.errorContainer}>
        <Error description="Oops...! Something went wrong!" onClick={refetch} />
      </div>
    );
  }

  const selectFlex = (imgIndex: number) => {
    switch (imgIndex % 3) {
      case 0:
        return clientCss.flexStart;
      case 1:
        return clientCss.flexCenter;
      case 2:
        return clientCss.flexEnd;
    }
  };
  const selectFlexXS = (imgIndex: number) => {
    switch (imgIndex % 2) {
      case 0:
        return clientCss.flexStart;
      case 1:
        return clientCss.flexEnd;
    }
  };

  return (
    <div css={clientCss.container}>
      <Text color="white" css={clientCss.title}>
        Clients
      </Text>
      <Text color="white" css={clientCss.description}>
        {data?.description}
      </Text>
      <div css={clientCss.clientsLogoContainer}>
        {data?.clients?.map((client, index) => (
          <div
            css={[
              clientCss.column,
              isXs ? selectFlexXS(index) : selectFlex(index),
              isXs && data?.clients?.length - 3 <= index && clientCss.noMargin,
            ]}
            key={index}
          >
            <div css={clientCss.logoContainer}>
              <Img src={client.logoUrl} alt={client.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
