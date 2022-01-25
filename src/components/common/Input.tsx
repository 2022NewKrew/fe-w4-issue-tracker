import React from "react";
import styled, { css } from "styled-components";
import { Color } from "@/constant/constant";
import { Size, CheckState } from "@/ts/enum";
import { Dispatch, SetStateAction } from "react";

type InputInfo = {
  inputSize?: Size;
  placeholder?: string;
  textCheckResult?: (message: string) => CheckState;
  textCheckMessage?: (checkResult: CheckState) => string;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputInfo) => {
  const inputSize = props.inputSize;
  const inputValue = props.inputValue;
  const placeholder = props.placeholder;
  const textCheckResult = props.textCheckResult
    ? props.textCheckResult(inputValue)
    : CheckState.None;
  const textCheckMessage =
    textCheckResult !== CheckState.None && props.textCheckMessage
      ? props.textCheckMessage(textCheckResult)
      : "";

  const inputValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event);
      return;
    }
    props.setInputValue(event.target.value);
  };

  return (
    <Wrapper>
      <InputWrapper>
        <TextInput
          className={inputValue !== "" && inputValue ? "fill" : ""}
          inputSize={inputSize}
          textCheckResult={textCheckResult}
          value={inputValue}
          onChange={inputValueChange}
        />
        <TextLabel inputSize={inputSize} textCheckResult={textCheckResult}>
          {placeholder}
        </TextLabel>
      </InputWrapper>
      <TextCheckMessageSpan textCheckResult={textCheckResult}>
        {textCheckMessage}
      </TextCheckMessageSpan>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 5px; //TODO: 테스트용 값 변경 예장
`;

const InputWrapper = styled.div`
  position: relative;
`;

const textFontStyle = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
`;

const TextCheckMessageSpan = styled.span<{ textCheckResult: CheckState }>`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  margin-top: 8px;
  ${(props) => getCheckResultStyle(props.textCheckResult)}
  width: max-content;
  background: transparent;
  outline: none;
`;

const TextLabel = styled.label<{
  inputSize?: Size;
  textCheckResult: CheckState;
}>`
  position: absolute;
  top: 0px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  color: ${Color.Placeholder};
  pointer-events: none;
  ${textFontStyle}
  ${(props) => getSizeStyle(props.inputSize)}
  ${(props) => getCheckResultStyle(props.textCheckResult)}
  width: max-content;
  background: transparent;
  outline: none;
`;

const TextInput = styled.input<{
  inputSize?: Size;
  textCheckResult: CheckState;
}>`
  display: block;
  padding: 0;
  text-indent: 24px;
  /* outline: none; */
  background: ${Color.InputBackground};
  border: none;

  ${textFontStyle}
  ${(props) => getSizeStyle(props.inputSize)}
  ${(props) => getCheckResultStyle(props.textCheckResult)}

  &:active {
    background: white;
    outline: 1px solid ${Color.TitleActive};
  }

  &:focus {
    background: white;
    outline: 1px solid ${Color.TitleActive};
    + label {
      color: ${Color.Label};
      font-size: 12px;
      line-height: 20px;
      align-items: start;
    }
    vertical-align: bottom;
  }

  &.fill {
    + label {
      font-size: 12px;
      line-height: 20px;
      align-items: start;
    }
    vertical-align: bottom;
  }

  &:disabled {
    opacity: 0.5;
    background: ${Color.InputBackground};
    border: none;
  }

  color: ${Color.TitleActive};
`;

const getSizeStyle = (inputSize: Size | undefined) => {
  switch (inputSize) {
    case Size.Large:
      return largeSize;
    case Size.Small:
      return smallSize;
    default:
      //Size.Medium || undefined
      return mediumSize;
  }
};

const getCheckResultStyle = (textCheckResult: CheckState) => {
  switch (textCheckResult) {
    case CheckState.Success:
      return successResult;
    case CheckState.Fail:
      return failResult;
    default:
      return null;
  }
};

const largeSize = css`
  width: 340px;
  /* height: 64px; */
  padding-top: 18px;
  padding-bottom: 18px;
  border-radius: 16px;
  &:focus,
  &.fill {
    padding-top: 28px;
    padding-bottom: 8px;
    + label {
      padding-top: 8px;
    }
  }
`;

const mediumSize = css`
  width: 320px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 14px;
  &:focus,
  &.fill {
    padding-top: 24px;
    padding-bottom: 4px;
    + label {
      padding-top: 4px;
    }
  }
`;

const smallSize = css`
  width: 300px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 11px;
  &:focus,
  &.fill {
    text-indent: 112px;
    + label {
      padding-top: 10px;
    }
  }
`;

const successResult = css`
  background: ${Color.LightGreen};
  outline: 1px solid ${Color.Green};
  color: ${Color.DarkGreen};
`;

const failResult = css`
  background: ${Color.LightRed};
  outline: 1px solid ${Color.Red};
  color: ${Color.DarkRed};
`;

export default Input;
