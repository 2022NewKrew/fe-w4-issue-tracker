import styled, { css } from "styled-components";
import { useState } from "react";

import TextInputLabel from "@components/inputs/text-input-label";
import TextInputTyping from "@components/inputs/text-input-typing";
import greyscale from "@styles/theme/greyscale";

const getTextInputOpacity = ({ componentDisabled }) => {
  switch (componentDisabled) {
    case true:
      return css`
        opacity: 0.5;
      `;
    default:
      return css``;
  }
};

const getTextInputFlexDirection = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
    case "medium":
      return css`
        flex-direction: column;
      `;
    case "small":
      return css`
        flex-direction: row;
      `;
    default:
      return css``;
  }
};

const getTextInputJustifyContent = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
    case "medium":
      return css`
        justify-content: center;
      `;
    default:
      return css``;
  }
};

const getTextInputAlignItems = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
    case "medium":
      return css`
        align-items: flex-start;
      `;
    case "small":
      return css`
        align-items: center;
      `;
    default:
      return css``;
  }
};

const getTextInputWidth = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        width: 340px;
      `;
    case "medium":
      return css`
        width: 320px;
      `;
    case "small":
      return css`
        width: 300px;
      `;
    default:
      return css``;
  }
};

const getTextInputHeight = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        height: 64px;
      `;
    case "medium":
      return css`
        height: 56px;
      `;
    case "small":
      return css`
        height: 40px;
      `;
    default:
      return css``;
  }
};

const getTextInputBorderRadius = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        border-radius: 16px;
      `;
    case "medium":
      return css`
        border-radius: 14px;
      `;
    case "small":
      return css`
        border-radius: 11px;
      `;
    default:
      return css``;
  }
};

const StyledTextInput = styled.div`
  display: flex;
  padding: 0px 24px;
  color: ${greyscale.inputBackground};
  background: ${greyscale.offWhite};
  border: 1px solid ${greyscale.titleActive};
  box-sizing: border-box;

  ${() => getTextInputOpacity}
  ${() => getTextInputFlexDirection}
  ${() => getTextInputJustifyContent}
  ${() => getTextInputAlignItems}
  ${() => getTextInputWidth}
  ${() => getTextInputHeight}
  ${() => getTextInputBorderRadius}
`;

const TextInput = ({ children, componentSize, componentDisabled }) => {
  const [disabled, setDisabled] = useState(componentDisabled);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <StyledTextInput componentSize={componentSize} componentDisabled={disabled}>
      <TextInputLabel>
        <span>{children}</span>
      </TextInputLabel>
      <TextInputTyping
        type={"text"}
        disabled={disabled}
        value={value}
        onChange={onChange}
        componentSize={componentSize}
      ></TextInputTyping>
    </StyledTextInput>
  );
};

export default TextInput;
