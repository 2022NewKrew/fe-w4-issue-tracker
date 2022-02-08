import { css } from "styled-components";

import fonts from "@styles/constants/fonts";
import greyscale from "@styles/constants/greyscale";

const displayTemplate = css`
  font-family: ${fonts.DEFAULT_FONT_FAMILY};
  font-style: normal;
  font-size: ${fonts.DISPLAY_FONT_SIZE};
  line-height: ${fonts.DISPLAY_LINE_HEIGHT};
`;

export const displayBold = css`
  ${displayTemplate}
  font-weight: bold;
`;

export const displayRegular = css`
  ${displayTemplate}
  font-weight: normal;
`;
