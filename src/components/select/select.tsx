/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Select, {
  StylesConfig,
  ActionMeta,
  components,
  OptionProps,
} from 'react-select';
import theme from 'theme';
import { FC } from 'react';
import { PlayArrow } from '@emotion-icons/material';

export type OptionType = { value: number | string; label: string };
type OptionsType = OptionType[];

type SelectProps = {
  options: OptionsType;
  value: OptionType;
  defaultValue: OptionType;
  label?: string;
  onChange: (
    option: OptionType | null,
    actionMeta: ActionMeta<OptionType>,
  ) => void;
};
type IsMulti = false;

const selectStyle: StylesConfig<OptionType, IsMulti> = {
  input: (provided) => ({
    ...provided,
    color: theme.colors.text.white,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: theme.colors.text.white,
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: theme.colors.background.black,
    border: state.isFocused ? 'none' : 'none',
    boxShadow: 'none',
  }),
  container: (provided, state) => ({
    ...provided,
    border: state.isFocused ? '1px solid' : 'none',
    borderColor: theme.colors.background.white,
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: theme.colors.background.black,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: theme.colors.background.black,
    color: theme.colors.text.white,
    fontSize: 16,
    borderColor: state.isFocused ? '#fff' : 'none',
    border: state.isFocused ? '1px solid' : 'none',
  }),
  singleValue: (provided) => ({
    ...provided,
    backgroundColor: theme.colors.background.black,
    color: theme.colors.text.white,
  }),
};

const labelCss = {
  label: css({
    color: theme.colors.text.lightGrey,
    paddingLeft: theme.spacing(),
    paddingBottom: theme.spacing(0.5),
  }),
};
const { Option } = components;

const CustomOption: FC<OptionProps<OptionType, IsMulti, any>> = (props) => (
  <Option {...props}>
    {props.isSelected && <PlayArrow size={16} color={'white'} />}

    {props.label}
  </Option>
);

const CustomSelect: FC<SelectProps> = (props) => {
  const { options, value, onChange, defaultValue, label } = props;
  return (
    <>
      <label htmlFor="html" css={labelCss.label}>
        {label}
      </label>
      <Select
        options={options}
        id="html"
        styles={selectStyle}
        onChange={onChange}
        defaultValue={value.value !== undefined ? value : defaultValue}
        isSearchable={false}
        components={{
          IndicatorSeparator: () => null,
          Option: CustomOption,
        }}
      />
    </>
  );
};

export default CustomSelect;
