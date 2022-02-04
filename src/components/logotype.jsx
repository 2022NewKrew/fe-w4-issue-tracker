import styled, { css } from "styled-components";

import greyScale from "@styles/greyscale";

const getLogotypeFontWeight = ({ type }) => {
  switch (type) {
    case "large":
      return css`
        font-weight: normal;
      `;
    default:
      return css`
        font-weight: 500;
      `;
  }
};

const getLogotypeFontSize = ({ type }) => {
  switch (type) {
    case "large":
      return css`
        font-size: 56px;
      `;
    default:
      return css`
        font-size: 32px;
      `;
  }
};

const getLogotypeLineHeight = ({ type }) => {
  switch (type) {
    case "large":
      return css`
        line-height: 72px;
      `;
    default:
      return css`
        line-height: 40px;
      `;
  }
};

const StyledLogotype = styled.span`
  font-family: Montserrat;
  font-style: italic;
  letter-spacing: -0.04em;
  color: ${greyScale.default};
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
