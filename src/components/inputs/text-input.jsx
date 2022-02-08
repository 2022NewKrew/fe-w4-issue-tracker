import styled, { css } from "styled-components";
import { useState } from "react";

import TextInputLabel from "@components/inputs/text-input-label";
import TextInputTyping from "@components/inputs/text-input-typing";
import greyscale from "@styles/constants/greyscale";
import sizes from "@styles/constants/sizes";
import { disabledOpacity } from "@utils/helper";

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
        width: ${sizes.TEXT_INPUT_LARGE_WIDTH};
      `;
    case "medium":
      return css`
        width: ${sizes.TEXT_INPUT_MEDIUM_WIDTH};
      `;
    case "small":
      return css`
        width: ${sizes.TEXT_INPUT_SMALL_WIDTH};
      `;
    default:
      return css``;
  }
};

const getTextInputHeight = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        height: ${sizes.TEXT_INPUT_LARGE_HEIGHT};
      `;
    case "medium":
      return css`
        height: ${sizes.TEXT_INPUT_MEDIUM_HEIGHT};
      `;
    case "small":
      return css`
        height: ${sizes.TEXT_INPUT_SMALL_HEIGHT};
      `;
    default:
      return css``;
  }
};

const getTextInputBorderRadius = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        border-radius: ${sizes.TEXT_INPUT_LARGE_BORDER_RADIUS};
      `;
    case "medium":
      return css`
        border-radius: ${sizes.TEXT_INPUT_MEDIUM_BORDER_RADIUS};
      `;
    case "small":
      return css`
        border-radius: ${sizes.TEXT_INPUT_SMALL_BORDER_RADIUS};
      `;
    default:
      return css``;
  }
};

const StyledTextInput = styled.div`
  display: flex;
  padding: ${sizes.TEXT_INPUT_PADDING};
  background: ${greyscale.OFF_WHITE};
  border: ${sizes.TEXT_INPUT_BORDER_WIDTH} solid ${greyscale.TITLE_ACTIVE};
  box-sizing: border-box;

  ${disabledOpacity}
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

  return (
    <StyledTextInput componentSize={componentSize} componentDisabled={disabled}>
      <TextInputLabel>
        <span>{children}</span>
      </TextInputLabel>
      <TextInputTyping
        type={"text"}
        disabled={disabled}
        value={value}
        componentSize={componentSize}
        onChange={(e) => setValue(e.target.value)}
      ></TextInputTyping>
    </StyledTextInput>
  );
};

export default TextInput;
