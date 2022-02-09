import styled, { css } from "styled-components";

export const Text = styled.p`
  ${({ options: { size } }) => cssFontSize[size]}
  ${({ options: { isLink } }) => (isLink ? cssLink : null)}
`;

export const cssFontSize = {
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

export const cssLink = css`
  font-weight: 500;
`;
