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

const link = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
`;

const text = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
`;

const Large = css`
  font-size: 24px;
  line-height: 40px;
`;

const Medium = css`
  font-size: 18px;
  line-height: 32px;
`;

const Small = css`
  font-size: 16px;
  line-height: 28px;
`;

const XSmall = css`
  font-size: 12px;
  line-height: 20px;
`;

export const textStyles = {
  display,
  displayBold: css`
    ${display} font-weight: bold;
  `,
  textMedium: css`
    ${text} ${Medium}
  `,
  textSmall: css`
    ${text} ${Small}
  `,
  textXSmall: css`
    ${text} ${XSmall} font-weight: 500;
  `,
  textLarge: css`
    ${text} ${Large}
  `,
  linkLarge: css`
    ${link} ${Large}
  `,
  linkMedium: css`
    ${link} ${Medium}
  `,
  linkSmall: css`
    ${link} ${Small}
  `,
  linkXSmall: css`
    ${link} ${XSmall}
  `,
};
