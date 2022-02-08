import { css } from "styled-components";

import colors from "@styles/constants/colors";

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
    case "small":
      return css`
        width: 120px;
      `;
    default:
      return css``;
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
    case "small":
      return css`
        height: 40px;
      `;
    default:
      return css``;
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

export const getButtoncomponentType = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
    case "medium":
      return "linkMedium";
    case "small":
      return "linkXSmall";
    default:
      return "";
  }
};

export const getTextInputDisplay = ({ componentSize }) => {
  switch (componentSize) {
    case "small":
      return css`
        display: flex;
      `;
    default:
      return css``;
  }
};

export const getTextInputAlignItems = ({ componentSize }) => {
  switch (componentSize) {
    case "small":
      return css`
        align-items: center;
      `;
    default:
      return css``;
  }
};
