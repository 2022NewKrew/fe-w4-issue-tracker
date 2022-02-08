import { css } from "styled-components";

import greyscale from "@styles/constants/greyscale";

const displayTemplate = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-size: 32px;
  line-height: 48px;
  color: ${greyscale.default};
`;

export const displayBold = css`
  ${displayTemplate}
  font-weight: bold;
`;

export const displayRegular = css`
  ${displayTemplate}
  font-weight: normal;
`;
