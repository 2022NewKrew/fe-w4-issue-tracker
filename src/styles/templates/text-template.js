import { css } from "styled-components";

import fonts from "@styles/constants/fonts";
import greyscale from "@styles/constants/greyscale";
import {
  largeTemplate,
  mediumTemplate,
  smallTemplate,
  xSmallTemplate,
} from "@styles/templates/size-template";

const textTemplate = css`
  font-family: ${fonts.DEFAULT_FONT_FAMILY};
  font-style: normal;
  font-weight: normal;
`;

export const textLarge = css`
  ${textTemplate}
  ${largeTemplate}
`;

export const textMedium = css`
  ${textTemplate}
  ${mediumTemplate}
`;

export const textSmall = css`
  ${textTemplate}
  ${smallTemplate}
`;

export const textXSmall = css`
  ${textTemplate}
  ${xSmallTemplate}
`;
