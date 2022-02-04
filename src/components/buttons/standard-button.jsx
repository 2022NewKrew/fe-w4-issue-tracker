import styled, { css } from "styled-components";

import colors from "@styles/colors";

const getStandardButtonPadding = ({ type }) => {
  switch (type) {
    case "large":
    case "medium":
      return css`
        padding: 24px;
      `;
    case "small":
      return css`
        padding: 16px;
      `;
    default:
      return css``;
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
        height: 64px;
      `;
    case "medium":
      return css`
        height: 56px;
      `;
    default:
      return css`
        height: 40px;
      `;
  }
};

const getStandardButtonBorderRadius = ({ type }) => {
  switch (type) {
    case "large":
    case "medium":
      return css`
        border-radius: 20px;
      `;
    case "small":
      return css`
        border-radius: 11px;
      `;
    default:
      return css``;
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
  ${() => getStandardButtonWidth}
  ${() => getStandardButtonHeight}
  ${() => getStandardButtonBorderRadius}
`;

const StandardButton = ({ children, type }) => {
  return (
    <StyledStandardButton type={type}>
      <span>{children}</span>
    </StyledStandardButton>
  );
};

export default StandardButton;
