import styled, { css } from "styled-components";

import greyscale from "@styles/constants/greyscale";
import numbers from "@styles/constants/numbers";
import sizes from "@styles/constants/sizes";
import { textSmall } from "@styles/templates/text-template";
import {
  allBorderRemove,
  getTextInputDisplay,
  getTextInputAlignItems,
} from "@utils/helper";

const getTypingWidth = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LARGE:
      return css`
        width: ${numbers.TEXT_INPUT_TYPING_LARGE_WIDTH};
      `;
    case sizes.MEDIUM:
      return css`
        width: ${numbers.TEXT_INPUT_TYPING_MEDIUM_WIDTH};
      `;
    case sizes.SMALL:
      return css`
        width: ${numbers.TEXT_INPUT_TYPING_SMALL_WIDTH};
      `;
    default:
      return css``;
  }
};

const getTypingHeight = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LARGE:
      return css`
        height: ${numbers.TEXT_INPUT_TYPING_LARGE_HEIGHT};
      `;
    case sizes.MEDIUM:
      return css`
        height: ${numbers.TEXT_INPUT_TYPING_MEDIUM_HEIGHT};
      `;
    case sizes.SMALL:
      return css`
        height: ${numbers.TEXT_INPUT_TYPING_SMALL_HEIGHT};
      `;
    default:
      return css``;
  }
};

const getTypingAlignSelf = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.MEDIUM:
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
