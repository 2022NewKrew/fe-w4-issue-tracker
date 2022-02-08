import styled, { css } from "styled-components";

import themeGreyscale from "@styles/themes/theme-greyscale";

const getTypographyLogotypeFontWeight = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        font-weight: normal;
      `;
    case "medium":
      return css`
        font-weight: 500;
      `;
    default:
      return css``;
  }
};

const getTypographyLogotypeFontSize = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        font-size: 56px;
      `;
    case "medium":
      return css`
        font-size: 32px;
      `;
    default:
      return css``;
  }
};

const getTypographyLogotypeLineHeight = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        line-height: 72px;
      `;
    case "medium":
      return css`
        line-height: 40px;
      `;
    default:
      return css``;
  }
};

const StyledTypographyLogotype = styled.span`
  font-family: Montserrat;
  font-style: italic;
  letter-spacing: -0.04em;
  color: ${themeGreyscale.default};

  ${() => getTypographyLogotypeFontWeight}
  ${() => getTypographyLogotypeFontSize}
  ${() => getTypographyLogotypeLineHeight}
`;

const TypographyLogotype = ({ children, componentSize }) => {
  return (
    <StyledTypographyLogotype componentSize={componentSize}>
      <span>{children}</span>
    </StyledTypographyLogotype>
  );
};

export default TypographyLogotype;
