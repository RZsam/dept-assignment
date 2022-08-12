/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FC } from 'react';
import Text from 'components/text';
import Button from 'components/button';
import theme from 'theme';

type ErrorType = {
  description: string;
  onClick?: () => void;
};
const errorCss = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }),
  description: css({
    fontSize: 34,
    marginBottom: theme.spacing(2),
  }),
};

const Error: FC<ErrorType> = (props) => {
  const { onClick, description } = props;
  return (
    <div css={errorCss.container}>
      <Text css={errorCss.description}>{description}</Text>
      {onClick && <Button onClick={onClick}> Retry </Button>}
    </div>
  );
};

export default Error;
