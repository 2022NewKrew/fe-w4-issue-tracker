import { css } from "styled-components";

import typography from "@styles/constants/typography";

const displayTemplate = css`
  font-family: ${typography.FONT_FAMILY};
  font-style: normal;
  font-size: ${typography.DISPLAY_FONT_SIZE};
  line-height: ${typography.DISPLAY_LINE_HEIGHT};
`;

export const displayBold = css`
  ${displayTemplate}
  font-weight: bold;
`;

export const displayRegular = css`
  ${displayTemplate}
  font-weight: normal;
`;
