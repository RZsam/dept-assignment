/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Text from 'components/text';
import Input from 'components/input';
import theme from 'theme';
import TextArea from 'components/textarea';
import Button from 'components/button';
import mq, { getMaxWidthString } from 'theme/media-queries';
import useMediaQuery from 'hooks/useMediaQuery';

const sectionCss = {
  container: css({
    margin: theme.spacing(7),
    display: 'flex',
    [mq('md')]: css({
      border: 'none',
      display: 'block',
      margin: `${theme.spacing(6)}px ${theme.spacing(4.5)}px`,
    }),
  }),
  descirptionContainer: css({
    fontSize: 48,
    [mq('md')]: css({
      fontSize: 26,
    }),
  }),
  form: css({
    marginLeft: theme.spacing(8),
    input: css({
      width: 300,
      [mq('lg')]: css({
        width: '100%',
      }),
    }),
    textarea: css({
      width: 300,
      [mq('lg')]: css({
        width: '50%',
      }),
      [mq('md')]: css({
        width: '100%',
      }),
    }),
    [mq('md')]: css({
      marginLeft: 0,
    }),
  }),
  inputRow: css({
    display: 'flex',
    marginBottom: theme.spacing(4.5),
    [mq('md')]: css({
      display: 'block',
      input: css({
        margin: `${theme.spacing(4.5)}px 0`,
      }),
    }),
  }),
  nameInput: css({
    marginRight: theme.spacing(4.5),
    [mq('md')]: css({
      marginRight: 0,
    }),
  }),
  submitBtn: {
    marginTop: theme.spacing(7),
    [mq('md')]: css({
      width: '100%',
    }),
  },
};
const CommentSection = () => {
  const isMd = useMediaQuery(getMaxWidthString('md'));

  return (
    <div css={sectionCss.container}>
      <Text css={sectionCss.descirptionContainer}>
        {isMd ? (
          'QUESTION? WE ARE HERE TO HELP!'
        ) : (
          <>
            QUESTION? <br /> WE ARE HERE <br /> TO HELP!
          </>
        )}
      </Text>
      <div css={sectionCss.form}>
        <div css={sectionCss.inputRow}>
          <div css={sectionCss.nameInput}>
            <Input label="NAME" />
          </div>
          <Input label="EMAIL" type="email" />
        </div>

        <TextArea label="MESSAGE" type="email" rows={6} />
        <Button css={sectionCss.submitBtn}> Send</Button>
      </div>
    </div>
  );
};

export default CommentSection;
