import { css } from "styled-components";

import typography from "@styles/constants/greyscale";
import {
  largeTemplate,
  mediumTemplate,
  smallTemplate,
  xSmallTemplate,
} from "@styles/templates/type-template";

const linkTemplate = css`
  font-family: ${typography.DEFAULT_FONT_FAMILY};
  font-style: normal;
  font-weight: bold;
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
