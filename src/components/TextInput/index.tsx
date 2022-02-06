/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, HTMLInputTypeAttribute } from 'react';
import { jsx, css } from '@emotion/react';
import { theme } from '@styles/theme';
import { TextInputStatus } from '@/types';

interface TextInputProps {
  type: HTMLInputTypeAttribute;
  size: 'large' | 'medium' | 'small';
  placeholder: string;
  disabled?: boolean;
  onChange?: (string) => void;
  valueEvaluator?: (string) => boolean;
  successMessage?: string;
  errorMessage?: string;
}

const TextInput = ({
  type = 'text',
  size = 'large',
  placeholder,
  disabled,
  onChange,
  valueEvaluator,
  successMessage,
  errorMessage,
  ...props
}: TextInputProps) => {
  const [inputStatus, setInputStatus] = useState<TextInputStatus>(
    disabled ? TextInputStatus.Disabled : TextInputStatus.Initial
  );

  const handleOnFocus = () => setInputStatus(TextInputStatus.Typing);

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value === '') return setInputStatus(TextInputStatus.Initial);
    valueEvaluator
      ? setInputStatus(valueEvaluator(value) ? TextInputStatus.Success : TextInputStatus.Error)
      : setInputStatus(TextInputStatus.Filled);
  };

  return (
    <div css={[initialStyle, sizeStyle[size], statusStyle[inputStatus]]} {...props}>
      {![TextInputStatus.Initial, TextInputStatus.Disabled].includes(inputStatus) && (
        <div>{placeholder}</div>
      )}
      <input
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      {inputStatus === TextInputStatus.Success && (
        <span css={[messageStyle, { color: darkGreen }]}>{successMessage}</span>
      )}
      {inputStatus === TextInputStatus.Error && (
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
