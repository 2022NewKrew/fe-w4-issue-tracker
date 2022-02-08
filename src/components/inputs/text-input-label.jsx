import styled, { css } from "styled-components";

import greyscale from "@styles/constants/greyscale";
import sizes from "@styles/constants/sizes";
import { textXSmall } from "@styles/templates/text-template";
import { getTextInputDisplay, getTextInputAlignItems } from "@utils/helper";

const getLabelWidth = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        width: ${sizes.TEXT_INPUT_LABEL_LARGE_WIDTH};
      `;
    case "medium":
      return css`
        width: ${sizes.TEXT_INPUT_LABEL_MEDIUM_WIDTH};
      `;
    case "small":
      return css`
        width: ${sizes.TEXT_INPUT_LABEL_SMALL_WIDTH};
      `;
    default:
      return css``;
  }
};

const getLabelHeight = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        height: ${sizes.TEXT_INPUT_LABEL_LARGE_HEIGHT};
      `;
    case "medium":
      return css`
        height: ${sizes.TEXT_INPUT_LABEL_MEDIUM_HEIGHT};
      `;
    case "small":
      return css`
        height: ${sizes.TEXT_INPUT_LABEL_SMALL_HEIGHT};
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
