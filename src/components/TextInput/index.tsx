/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, HTMLInputTypeAttribute, Dispatch, SetStateAction } from 'react';
import { jsx, css } from '@emotion/react';
import { theme } from '@styles/theme';

interface TextInputProps {
  type: HTMLInputTypeAttribute;
  size: 'large' | 'medium' | 'small';
  placeholder: string;
  disabled?: boolean;
  setValue?: Dispatch<SetStateAction<string>>;
  valueEvaluator?: (string) => any;
  successMessage?: string;
  errorMessage?: string;
}

const TextInput = ({
  type = 'text',
  size = 'large',
  placeholder,
  disabled,
  setValue,
  valueEvaluator,
  successMessage,
  errorMessage,
  ...props
}: TextInputProps) => {
  const [inputStatus, setInputStatus] = useState<
    'Initial' | 'Typing' | 'Filled' | 'Success' | 'Error' | 'Disabled'
  >(disabled ? 'Disabled' : 'Initial');

  const handleOnFocus = () => setInputStatus('Typing');

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === '') return setInputStatus('Initial');
    valueEvaluator
      ? setInputStatus(valueEvaluator(value) ? 'Success' : 'Error')
      : setInputStatus('Filled');
  };

  return (
    <div css={[initialStyle, sizeStyle[size], statusStyle[inputStatus]]} {...props}>
      {inputStatus !== 'Initial' && inputStatus !== 'Disabled' && <div>{placeholder}</div>}
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      {inputStatus === 'Success' && (
        <span css={[messageStyle, { color: darkGreen }]}>{successMessage}</span>
      )}
      {inputStatus === 'Error' && (
        <span css={[messageStyle, { color: darkRed }]}>{errorMessage}</span>
      )}
    </div>
  );
};

const { inputBackground, placeHolder, offWhite, titleActive, label } = theme.greyScale;
const { textSmall, textXSmall } = theme.textStyles;
const { green, lightGreen, darkGreen } = theme.colors.success;
const { red, lightRed, darkRed } = theme.colors.error;

const nameOnTop = css`
  flex-direction: column;
  align-items: flex-start;
`;

const large = css`
  width: 340px;
  height: 64px;
  border-radius: 16px;
  & > input {
    height: 28px;
  }
  ${nameOnTop}
`;

const medium = css`
  width: 320px;
  height: 56px;
  border-radius: 14px;
  & > input {
    height: 28px;
  }
  ${nameOnTop}
`;

const small = css`
  width: 300px;
  height: 40px;
  border-radius: 11px;
  & > div {
    min-width: 80px;
  }
  & > input {
    height: 40px;
  }
`;

const sizeStyle = {
  large,
  medium,
  small,
};

const messageStyle = css`
  position: absolute;
  bottom: -28px;
  left: 0px;
  ${textXSmall}
`;

const Typing = css`
  background: ${offWhite};
  border: 1px solid ${titleActive};
`;

const Success = css`
  background: ${lightGreen};
  border: 1px solid ${green};
  & > div {
    color: ${darkGreen};
  }
`;

const Error = css`
  background: ${lightRed};
  border: 1px solid ${red};
  & > div {
    color: ${darkRed};
  }
`;

const Disabled = css`
  opacity: 0.5;
`;

const initialStyle = css`
  position: relative;
  box-sizing: border-box;

  background: ${inputBackground};
  padding: 0 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    color: ${label};
    ${textXSmall}
  }

  & > input {
    width: 100%;
    background: none;
    border: none;
    color: ${titleActive};
    ${textSmall}

    &:focus {
      outline: none;
    }

    ::placeholder {
      color: ${placeHolder};
    }
  }
`;

const statusStyle = {
  Typing,
  Success,
  Error,
  Disabled,
};

export default TextInput;
