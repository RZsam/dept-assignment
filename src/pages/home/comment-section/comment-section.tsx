/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Text from 'components/text';
import Input from 'components/input';
import theme from 'theme';
import TextArea from 'components/textarea';
import Button from 'components/button';

const sectionCss = {
  container: css({
    margin: theme.spacing(7),
    display: 'flex',
  }),
  descirptionContainer: css({
    fontSize: 48,
  }),
  form: css({
    marginLeft: theme.spacing(8),
  }),
  inputRow: css({
    display: 'flex',
    marginBottom: theme.spacing(4.5),
  }),
  nameInput: css({
    marginRight: theme.spacing(4.5),
  }),
  submitBtn: {
    marginTop: theme.spacing(7),
  },
};
const CommentSection = () => {
  return (
    <div css={sectionCss.container}>
      <Text css={sectionCss.descirptionContainer}>
        QUESTION?
        <br /> WE ARE HERE
        <br /> TO HELP!
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
