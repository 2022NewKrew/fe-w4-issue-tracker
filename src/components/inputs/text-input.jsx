import styled, { css } from "styled-components";
import { useState } from "react";

import TextInputLabel from "@components/inputs/text-input-label";
import TextInputTyping from "@components/inputs/text-input-typing";
import greyscale from "@styles/constants/greyscale";
import numbers from "@styles/constants/numbers";
import sizes from "@styles/constants/sizes";
import { disabledOpacity } from "@utils/helper";

const getTextInputFlexDirection = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LARGE:
    case sizes.MEDIUM:
      return css`
        flex-direction: column;
      `;
    case sizes.SMALL:
      return css`
        flex-direction: row;
      `;
    default:
      return css``;
  }
};

const getTextInputJustifyContent = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LARGE:
    case sizes.MEDIUM:
      return css`
        justify-content: center;
      `;
    default:
      return css``;
  }
};

const getTextInputAlignItems = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LARGE:
    case sizes.MEDIUM:
      return css`
        align-items: flex-start;
      `;
    case sizes.SMALL:
      return css`
        align-items: center;
      `;
    default:
      return css``;
  }
};

const getTextInputWidth = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LARGE:
      return css`
        width: ${numbers.TEXT_INPUT_LARGE_WIDTH};
      `;
    case sizes.MEDIUM:
      return css`
        width: ${numbers.TEXT_INPUT_MEDIUM_WIDTH};
      `;
    case sizes.SMALL:
      return css`
        width: ${numbers.TEXT_INPUT_SMALL_WIDTH};
      `;
    default:
      return css``;
  }
};

const getTextInputHeight = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LARGE:
      return css`
        height: ${numbers.TEXT_INPUT_LARGE_HEIGHT};
      `;
    case sizes.MEDIUM:
      return css`
        height: ${numbers.TEXT_INPUT_MEDIUM_HEIGHT};
      `;
    case sizes.SMALL:
      return css`
        height: ${numbers.TEXT_INPUT_SMALL_HEIGHT};
      `;
    default:
      return css``;
  }
};

const getTextInputBorderRadius = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LARGE:
      return css`
        border-radius: ${numbers.TEXT_INPUT_LARGE_BORDER_RADIUS};
      `;
    case sizes.MEDIUM:
      return css`
        border-radius: ${numbers.TEXT_INPUT_MEDIUM_BORDER_RADIUS};
      `;
    case sizes.SMALL:
      return css`
        border-radius: ${numbers.TEXT_INPUT_SMALL_BORDER_RADIUS};
      `;
    default:
      return css``;
  }
};

const StyledTextInput = styled.div`
  display: flex;
  padding: ${numbers.TEXT_INPUT_PADDING};
  background: ${greyscale.OFF_WHITE};
  border: ${numbers.TEXT_INPUT_BORDER_WIDTH} solid ${greyscale.TITLE_ACTIVE};
  box-sizing: border-box;

  ${disabledOpacity}
  ${() => getTextInputFlexDirection}
  ${() => getTextInputJustifyContent}
  ${() => getTextInputAlignItems}
  ${() => getTextInputWidth}
  ${() => getTextInputHeight}
  ${() => getTextInputBorderRadius}
`;

const TextInput = ({
  children,
  componentSize,
  componentDisabled,
  componentValue,
}) => {
  const [disabled, setDisabled] = useState(componentDisabled);
  const [value, setValue] = useState(componentValue);

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
