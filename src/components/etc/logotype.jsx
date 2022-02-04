import styled, { css } from "styled-components";

import greyscale from "@styles/greyscale";

const getLogotypeFontWeight = ({ type }) => {
  switch (type) {
    case "large":
      return css`
        font-weight: normal;
      `;
    case "regular":
      return css`
        font-weight: 500;
      `;
    default:
      return css``;
  }
};

const getLogotypeFontSize = ({ type }) => {
  switch (type) {
    case "large":
      return css`
        font-size: 56px;
      `;
    case "regular":
      return css`
        font-size: 32px;
      `;
    default:
      return css``;
  }
};

const getLogotypeLineHeight = ({ type }) => {
  switch (type) {
    case "large":
      return css`
        line-height: 72px;
      `;
    case "regular":
      return css`
        line-height: 40px;
      `;
    default:
      return css``;
  }
};

const StyledLogotype = styled.span`
  font-family: Montserrat;
  font-style: italic;
  letter-spacing: -0.04em;
  color: ${greyscale.default};
  ${() => getLogotypeFontWeight}
  ${() => getLogotypeFontSize}
  ${() => getLogotypeLineHeight}
`;

const Logotype = ({ children, type }) => {
  return (
    <StyledLogotype type={type}>
      <span>{children}</span>
    </StyledLogotype>
  );
};

export default Logotype;
