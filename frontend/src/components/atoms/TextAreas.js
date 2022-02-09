import React, { useCallback, useMemo, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Paperclip } from "@assets/icons/paperclip.svg";

const TextInputContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : 200)}px;

  border-radius: 16px;

  position: relative;

  background-color: ${(props) => props.theme.greyscale.inputBackground};

  :focus-within {
    border: 1px solid ${(props) => props.theme.greyscale.titleActive};
    background-color: ${(props) => props.theme.greyscale.offWhite};
  }
`;

const TextAreaInput = styled.textarea`
  width: 100%;
  height: 80%;

  background: none;
  border: none;
  outline: none;

  padding: 44px 24px 0px 24px;

  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
  }

  &::-webkit-resizer {
    display: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 16px;
  left: 24px;
  bottom: ${(props) => (props.size === "large" ? 24 : 14)}px;

  font-size: 16px;
  font-weight: normal;

  pointer-events: none;
  transition: 0.3s ease all;

  color: ${(props) => props.theme.greyscale.placeholder};

  ${TextAreaInput}:focus ~ & {
    top: 8px;
    font-size: 12px;
    color: ${(props) => props.theme.greyscale.label};
  }

  ${(props) => {
    if (props.active) {
      return css`
        top: 8px;
        font-size: 12px;
        color: ${(props) => props.theme.greyscale.label};
      `;
    }
  }}

  .success {
    color: ${(props) => props.theme.colors.darkGreen};
  }
  .error {
    color: ${(props) => props.theme.colors.darkRed};
  }
`;

const AttachWrapper = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;

  display: flex;
  align-items: center;
  box-sizing: border-box;

  padding: 15px;
  margin-top: 30px;

  border-top: 1px dashed ${(props) => props.theme.greyscale.line};

  cursor: pointer;

  ${({ customStyle }) => customStyle}
  svg {
    color: ${(props) => props.theme.greyscale.label};
  }
`;

const AttachWrapperActiveStyle = css`
  border-color: ${(props) => props.theme.greyscale.titleActive};
`;

const AttachText = styled.span`
  padding-top: 2px;
  margin-left: 7px;
  ${(props) => props.theme.greyscale.inputBackground};
  color: ${(props) => props.theme.greyscale.label};
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
`;

const InputLengthText = styled.div`
  position: absolute;
  bottom: 65px;
  right: 20px;
  color: ${(props) => props.theme.greyscale.label};
  font-size: ${(props) => props.theme.fontSizes.extraSmall};
`;

export default function TextArea({
  placeholder,
  isDisabled,
  onAttachClickListener,
  value,
  setValue,
  height,
}) {
  const [active, setActive] = useState(false);
  const [disable, setDisable] = useState(false);

  // 입력이 끝난 후 2초 후에 입력 길이를 보이도록 하기 위한 timeId
  const timeRef = useRef(0);
  // TextArea가 focus되고 있는지에 대한 state
  const [isFocus, setIsFocus] = useState(false);
  // TextArea의 값이 변경되고 2초가 지났는지에 대한 state
  const [isPassedTwoSecondsAfterTyping, setIsPassedTwoSecondsAfterTyping] =
    useState(false);

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
    changeDisable(e.currentTarget.value);
    changeActive(e.currentTarget.value);
    onInputValueChange(e.currentTarget.value);
  };

  const changeActive = (value) => {
    setActive(!!value);
  };

  const changeDisable = (value) => {
    if (!value) setDisable(true);
  };

  const onInputValueChange = useCallback(() => {
    clearTimeout(timeRef.current);
    setIsPassedTwoSecondsAfterTyping(false);

    timeRef.current = setTimeout(() => {
      setIsPassedTwoSecondsAfterTyping(true);
    }, 2000);
  }, []);

  const onFocus = useCallback((isFocus) => {
    setIsFocus(true);
  }, []);

  const onBlur = useCallback((isFocus) => {
    setIsFocus(false);
  }, []);

  // focus인 상태에서 input 값이 바뀐지 2초가 지나면 몇자를 입력했는지 보여주도록 함
  function inputLengthText() {
    if (isFocus && isPassedTwoSecondsAfterTyping) {
      return (
        <InputLengthText>{`띄어쓰기 포함 ${value.length}자`}</InputLengthText>
      );
    } else {
      return null;
    }
  }

  return (
    <TextInputContainer
      height={height}
      placeholder={placeholder || ""}
      isDisabled={isDisabled}>
      <TextAreaInput
        active={active}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
      />
      <Label active={active}>{placeholder}</Label>
      {inputLengthText()}
      <AttachWrapper
        customStyle={isFocus ? AttachWrapperActiveStyle : {}}
        onClick={onAttachClickListener}>
        <Paperclip width='16px' height='16px' />
        <AttachText>파일 첨부하기</AttachText>
      </AttachWrapper>
    </TextInputContainer>
  );
}
