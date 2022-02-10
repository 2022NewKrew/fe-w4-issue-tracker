import styled, { css } from "styled-components";

import { COLOR } from "@constants";

export const Progressbar = styled.div`
  height: 8px;
  border-radius: 10px;

  ${({ progress, width }) => css`
    width: ${width};
    background: linear-gradient(
      90deg,
      ${COLOR.BLUE.INITIAL} 0%,
      ${COLOR.BLUE.INITIAL} ${progress}%,
      ${COLOR.GREYSCALE.INPUT_BACKGROUND} ${progress}%,
      ${COLOR.GREYSCALE.INPUT_BACKGROUND} 100%
    );
  `}
`;
