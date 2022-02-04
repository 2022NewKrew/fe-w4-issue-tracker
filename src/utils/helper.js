import { css } from "styled-components";

import greyscale from "@styles/greyscale";

export const getFontWeight = ({ type }) => {
  switch (type) {
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

export const getFontSize = ({ type }) => {
  switch (type) {
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

export const getLineHeight = ({ type }) => {
  switch (type) {
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

export const getColor = ({ color }) => {
  return css`
    color: ${color ? color : greyscale.default};
  `;
};

export const allCenterAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const getButtonPadding = ({ type }) => {
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

export const getButtonWidth = ({ type }) => {
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

export const getButtonHeight = ({ type }) => {
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

export const getButtonBorderRadius = ({ type }) => {
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

export const getButtonCustomLinkType = ({ type }) => {
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
