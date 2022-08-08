/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useQuery } from '@tanstack/react-query';
import { getClient } from 'api/get-data';
import Text from 'components/text';
import theme from 'theme';
import Img from 'components/img';

const clientCss = {
  container: css({
    display: 'flex',
    flexWrap: 'wrap',
    padding: `${theme.spacing(5)}px ${theme.spacing(11.5)}px `,
    backgroundColor: theme.colors.background.black,
  }),
  title: css({
    fontSize: 34,
    marginBottom: theme.spacing(4),
  }),
  description: css({ fontSize: 18, marginBottom: theme.spacing(8) }),
  logoContainer: {
    width: 170,
    height: 90,
  },
  clientsLogoContainer: css({
    display: 'flex',
    flexWrap: 'wrap',
    padding: `0 ${theme.spacing(28)}px`,
  }),
  midLogo: css({ margin: `0 ${theme.spacing(30)}px` }),
  column: css({
    flexBasis: '33%',
    marginBottom: theme.spacing(10),
  }),
  flexStart: css({ display: 'flex', justifyContent: 'flex-start' }),
  flexCenter: css({ display: 'flex', justifyContent: 'center' }),
  flexEnd: css({ display: 'flex', justifyContent: 'flex-end' }),
};

const Clients = () => {
  const { isLoading, error, data } = useQuery(['getClients'], getClient);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>oops...! please try again!</Text>;
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
          <div css={[clientCss.column, selectFlex(index)]}>
            <div css={clientCss.logoContainer} key={index}>
              <Img src={client.logoUrl} alt={client.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
