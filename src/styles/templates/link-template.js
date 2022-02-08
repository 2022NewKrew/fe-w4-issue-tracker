import { css } from "styled-components";

import greyscale from "@styles/constants/greyscale";
import {
  largeTemplate,
  mediumTemplate,
  smallTemplate,
  xSmallTemplate,
} from "@styles/templates/size-template";

const linkTemplate = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  color: ${greyscale.default};
`;

export const linkLarge = css`
  ${linkTemplate}
  ${largeTemplate}
`;

export const linkMedium = css`
  ${linkTemplate}
  ${mediumTemplate}
`;

export const linkSmall = css`
  ${linkTemplate}
  ${smallTemplate}
`;

export const linkXSmall = css`
  ${linkTemplate}
  ${xSmallTemplate}
`;
