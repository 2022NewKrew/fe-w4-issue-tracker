import styled, { css } from "styled-components";

import Link from "@components/typography/link";
import colors from "@styles/colors";
import greyscale from "@styles/greyscale";
import { allCenterAlign } from "@utils/helper";

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

const getStandardButtonLinkType = ({ type }) => {
  switch (type) {
    case "large":
    case "medium":
      return "medium";
    case "small":
      return "x-small";
    default:
      return "";
  }
};

const StyledStandardButton = styled.button`
  background: ${colors.blue};
  ${allCenterAlign}
  ${() => getStandardButtonPadding}
  ${() => getStandardButtonWidth}
  ${() => getStandardButtonHeight}
  ${() => getStandardButtonBorderRadius}
`;

const StandardButton = ({ children, type }) => {
  return (
    <StyledStandardButton type={type}>
      <Link
        type={getStandardButtonLinkType({ type })}
        color={greyscale.offWhite}
      >
        <span>{children}</span>
      </Link>
    </StyledStandardButton>
  );
};

export default StandardButton;
