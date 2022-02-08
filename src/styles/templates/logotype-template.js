import { css } from "styled-components";

import greyscale from "@styles/constants/greyscale";

const logotypeTemplate = css`
  font-family: Montserrat;
  font-style: italic;
  letter-spacing: -0.04em;
  color: ${greyscale.default};
`;

export const logotypeLarge = css`
  ${logotypeTemplate}
  font-weight: normal;
  font-size: 56px;
  line-height: 72px;
`;

export const logotypeMedium = css`
  ${logotypeTemplate}
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
`;
