import styled, { css } from "styled-components";

import {
  getLogotypeFontWeight,
  getLogotypeFontSize,
  getLogotypeLineHeight,
} from "@utils/helper";

const StyledLogotype = styled.span`
  font-family: Montserrat;
  font-style: italic;
  letter-spacing: -0.04em;
  color: #000000;
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
