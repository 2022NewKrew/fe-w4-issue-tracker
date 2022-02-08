import styled, { css } from "styled-components";

import greyscale from "@styles/constants/greyscale";
import sizes from "@styles/constants/sizes";
import { textSmall } from "@styles/templates/text-template";
import {
  allBorderRemove,
  getTextInputDisplay,
  getTextInputAlignItems,
} from "@utils/helper";

const getTypingWidth = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        width: ${sizes.TEXT_INPUT_TYPING_LARGE_WIDTH};
      `;
    case "medium":
      return css`
        width: ${sizes.TEXT_INPUT_TYPING_MEDIUM_WIDTH};
      `;
    case "small":
      return css`
        width: ${sizes.TEXT_INPUT_TYPING_SMALL_WIDTH};
      `;
    default:
      return css``;
  }
};

const getTypingHeight = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        height: ${sizes.TEXT_INPUT_TYPING_LARGE_HEIGHT};
      `;
    case "medium":
      return css`
        height: ${sizes.TEXT_INPUT_TYPING_MEDIUM_HEIGHT};
      `;
    case "small":
      return css`
        height: ${sizes.TEXT_INPUT_TYPING_SMALL_HEIGHT};
      `;
    default:
      return css``;
  }
};

const getTypingAlignSelf = ({ componentSize }) => {
  switch (componentSize) {
    case "medium":
      return css`
        align-self: stretch;
      `;
    default:
      return css``;
  }
};

const TextInputTyping = styled.input`
  color: ${greyscale.TITLE_ACTIVE};

  ${textSmall}
  ${allBorderRemove}
  ${() => getTypingWidth}
  ${() => getTypingHeight}
  ${() => getTextInputDisplay}
  ${() => getTextInputAlignItems}
  ${() => getTypingAlignSelf}
`;

export default TextInputTyping;
