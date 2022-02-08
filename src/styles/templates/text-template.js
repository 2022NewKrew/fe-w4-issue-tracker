import { css } from "styled-components";

import typography from "@styles/constants/typography";
import {
  largeTemplate,
  mediumTemplate,
  smallTemplate,
  xSmallTemplate,
} from "@styles/templates/type-template";

const textTemplate = css`
  font-family: ${typography.DEFAULT_FONT_FAMILY};
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
