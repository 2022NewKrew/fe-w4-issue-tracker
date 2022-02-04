import { css } from "styled-components";

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
