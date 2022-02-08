import { css } from "styled-components";

import fonts from "@styles/constants/fonts";
import greyscale from "@styles/constants/greyscale";

const logotypeTemplate = css`
  font-family: ${fonts.LOGOTYPE_FONT_FAMILY};
  font-style: italic;
  letter-spacing: ${fonts.LOGOTYPE_LETTER_SPACING};
`;

export const logotypeLarge = css`
  ${logotypeTemplate}
  font-weight: normal;
  font-size: ${fonts.LOGOTYPE_LARGE_FONT_SIZE};
  line-height: ${fonts.LOGOTYPE_LARGE_LINE_HEIGHT};
`;

export const logotypeMedium = css`
  ${logotypeTemplate}
  font-weight: ${fonts.LOGOTYPE_MEDIUM_FONT_WEIGHT};
  font-size: ${fonts.LOGOTYPE_MEDIUM_FONT_SIZE};
  line-height: ${fonts.LOGOTYPE_MEDIUM_LINE_HEIGHT};
`;
