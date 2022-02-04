import { css } from "styled-components";

export const getFontWeight = ({ type }) => {
  switch (type) {
    case "bold":
      return css`
        font-weight: bold;
      `;
    default:
      return css`
        font-weight: normal;
      `;
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
    default:
      return css`
        font-size: 12px;
      `;
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
    default:
      return css`
        line-height: 20px;
      `;
  }
};

export const getLogotypeFontWeight = ({ type }) => {
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

export const getLogotypeFontSize = ({ type }) => {
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

export const getLogotypeLineHeight = ({ type }) => {
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
