/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from '@emotion/react';

const display = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 48px;
`;

const displayBold = css`
  ${display}
  font-weight: bold;
`;

const linkMedium = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
`;

const linkSmall = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
`;

const linkXSmall = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
`;

export const textStyles = {
  display,
  displayBold,
  linkMedium,
  linkSmall,
  linkXSmall,
};
