import styled from "styled-components";

import colors from "@styles/colors";

const getStandardButtonPadding = ({ type }) => {
  switch (type) {
    case "small":
      return css`
        padding: 16px;
      `;
    default:
      return css`
        padding: 24px;
      `;
  }
};

const getStandardButtonWidth = ({ type }) => {
  switch (type) {
    case "large":
      return css`
        width: 340px;
      `;
    case "medium":
      return css`
        width: 240px;
      `;
    default:
      return css`
        width: 120px;
      `;
  }
};

const getStandardButtonHeight = ({ type }) => {
  switch (type) {
    case "large":
      return css`
        height: 340px;
      `;
    case "medium":
      return css`
        height: 240px;
      `;
    default:
      return css`
        height: 120px;
      `;
  }
};

const StyledStandardButton = styled.button`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 20px;
  top: 20px;
  background: ${colors.blue};
  ${() => getStandardButtonPadding}
`;

const StandardButton = ({ children, type }) => {
  <StyledStandardButton type={type}>
    <span>{children}</span>
  </StyledStandardButton>;
};

export default StandardButton;
