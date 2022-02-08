import { css } from "styled-components";

import typography from "@styles/constants/typography";

const logotypeTemplate = css`
  font-family: ${typography.LOGOTYPE_FONT_FAMILY};
  font-style: italic;
  letter-spacing: ${typography.LOGOTYPE_LETTER_SPACING};
`;

export const logotypeLarge = css`
  ${logotypeTemplate}
  font-weight: normal;
  font-size: ${typography.LOGOTYPE_LARGE_FONT_SIZE};
  line-height: ${typography.LOGOTYPE_LARGE_LINE_HEIGHT};
`;

export const logotypeMedium = css`
  ${logotypeTemplate}
  font-weight: ${typography.LOGOTYPE_MEDIUM_FONT_WEIGHT};
  font-size: ${typography.LOGOTYPE_MEDIUM_FONT_SIZE};
  line-height: ${typography.LOGOTYPE_MEDIUM_LINE_HEIGHT};
`;
