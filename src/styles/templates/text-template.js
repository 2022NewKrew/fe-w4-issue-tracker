import { css } from "styled-components";

import greyscale from "@styles/constants/greyscale";
import {
  largeTemplate,
  mediumTemplate,
  smallTemplate,
  xSmallTemplate,
} from "@styles/templates/size-template";

const textTemplate = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  color: ${greyscale.default};
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
