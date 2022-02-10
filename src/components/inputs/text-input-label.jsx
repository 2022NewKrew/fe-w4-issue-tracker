import styled, { css } from "styled-components";

import greyscale from "@styles/constants/greyscale";
import numbers from "@styles/constants/numbers";
import sizes from "@styles/constants/sizes";
import { textXSmall } from "@styles/templates/text-template";
import { getTextInputDisplay, getTextInputAlignItems } from "@utils/helper";

const getLabelWidth = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LARGE:
      return css`
        width: ${numbers.TEXT_INPUT_LABEL_LARGE_WIDTH};
      `;
    case sizes.MEDIUM:
      return css`
        width: ${numbers.TEXT_INPUT_LABEL_MEDIUM_WIDTH};
      `;
    case sizes.SMALL:
      return css`
        width: ${numbers.TEXT_INPUT_LABEL_SMALL_WIDTH};
      `;
    default:
      return css``;
  }
};

const getLabelHeight = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LARGE:
      return css`
        height: ${numbers.TEXT_INPUT_LABEL_LARGE_HEIGHT};
      `;
    case sizes.MEDIUM:
      return css`
        height: ${numbers.TEXT_INPUT_LABEL_MEDIUM_HEIGHT};
      `;
    case sizes.SMALL:
      return css`
        height: ${numbers.TEXT_INPUT_LABEL_SMALL_HEIGHT};
      `;
    default:
      return css``;
  }
};

const TextInputLabel = styled.span`
  color: ${greyscale.LABEL};

  ${textXSmall}
  ${() => getLabelWidth}
  ${() => getLabelHeight}
  ${() => getTextInputDisplay}
  ${() => getTextInputAlignItems}
`;

export default TextInputLabel;
