import styled, { css } from "styled-components";

import greyscale from "@styles/constants/greyscale";
import {
  getTextInputTypographyDisplay,
  getTextInputAlignItems,
} from "@utils/helper";

const getTypingWidth = ({ componentSize }) => {
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
        width: 164px;
      `;
    default:
      return css``;
  }
};

const getTypingHeight = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
    case "medium":
      return css`
        height: 28px;
      `;
    case "small":
      return css`
        height: 36px;
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
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: ${greyscale.titleActive};
  border: 0px;

  ${() => getTypingWidth}
  ${() => getTypingHeight}
  ${() => getTextInputTypographyDisplay}
  ${() => getTextInputAlignItems}
  ${() => getTypingAlignSelf}

  &:focus {
    outline: none;
  }
`;

export default TextInputTyping;
