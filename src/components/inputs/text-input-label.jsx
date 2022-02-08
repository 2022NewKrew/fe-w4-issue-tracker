import styled, { css } from "styled-components";

import greyscale from "@styles/constants/greyscale";
import { getTextInputDisplay, getTextInputAlignItems } from "@utils/helper";

const getLabelWidth = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        width: 292px;
      `;
    case "medium":
      return css`
        width: 272px;
      `;
    case "small":
      return css`
        width: 80px;
      `;
    default:
      return css``;
  }
};

const getLabelHeight = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
    case "medium":
      return css`
        height: 20px;
      `;
    case "small":
      return css`
        height: 36px;
      `;
    default:
      return css``;
  }
};

const TextInputLabel = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${greyscale.label};

  ${() => getLabelWidth}
  ${() => getLabelHeight}
  ${() => getTextInputDisplay}
  ${() => getTextInputAlignItems}
`;

export default TextInputLabel;
