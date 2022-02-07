import { css } from "styled-components";

import colors from "@styles/colors";
import greyscale from "@styles/greyscale";

export const allCenterAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const disabledOpacity = css`
  &:disabled {
    opacity: 0.5;
  }
`;

export const buttonEvent = css`
  &:hover {
    border: 2px solid ${colors.darkBlue};
  }
  &:focus {
    border: 4px solid ${colors.lightBlue};
  }

  ${disabledOpacity}
`;

export const getFontWeight = ({ componentWeight }) => {
  switch (componentWeight) {
    case "bold":
      return css`
        font-weight: bold;
      `;
    case "regular":
      return css`
        font-weight: normal;
      `;
    default:
      return css``;
  }
};

export const getFontSize = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        font-size: 24px;
      `;
    case "medium":
      return css`
        font-size: 18px;
      `;
    case "small":
      return css`
        font-size: 16px;
      `;
    case "x-small":
      return css`
        font-size: 12px;
      `;
    default:
      return css``;
  }
};

export const getLineHeight = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        line-height: 40px;
      `;
    case "medium":
      return css`
        line-height: 32px;
      `;
    case "small":
      return css`
        line-height: 28px;
      `;
    case "x-small":
      return css`
        line-height: 20px;
      `;
    default:
      return css``;
  }
};

export const getColor = ({ componentColor }) => {
  return css`
    color: ${componentColor ? componentColor : greyscale.default};
  `;
};

export const getButtonPadding = ({ componentSize }) => {
  switch (componentSize) {
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

export const getButtonWidth = ({ componentSize }) => {
  switch (componentSize) {
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

export const getButtonHeight = ({ componentSize }) => {
  switch (componentSize) {
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

export const getButtonBorderRadius = ({ componentSize }) => {
  switch (componentSize) {
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

export const getButtonCustomLinkSize = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
    case "medium":
      return "medium";
    case "small":
      return "x-small";
    default:
      return "";
  }
};
