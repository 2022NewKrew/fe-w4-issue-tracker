import styled, { css } from "styled-components";

export const Text = styled.p`
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  font-weight: 300;

  ${({ options: { size } }) => sizeType[size]}
  ${({ options: { isLink } }) => (isLink ? link : null)}
`;

const sizeType = {
  large: css`
    font-size: 24px;
    line-height: 40px;
  `,
  medium: css`
    font-size: 18px;
    line-height: 32px;
  `,
  small: css`
    font-size: 16px;
    line-height: 28px;
  `,
  xsmall: css`
    font-size: 12px;
    line-height: 20px;
  `,
};

const link = css`
  font-weight: 500;
`;
