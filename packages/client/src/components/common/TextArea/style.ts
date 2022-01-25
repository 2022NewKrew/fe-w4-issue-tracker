import { css } from "@emotion/react";
import theme from "./theme";

export const TextAreaStyle = css`
  background: ${theme.greyscale.inputBackgound};
  border-radius: 16px;
  padding: 10px;
  width: 340px;
  height: 200px;
  position: relative;
  ${theme.flexCenter}
  ${theme.text.small};
  textarea {
    background: transparent;
    width: 100%;
    height: 128px;
    margin-bottom: 10px;
    padding: 34px 0 0 14px;
    :not(:placeholder-shown) + label {
      ${theme.text.xsmall};
      color: ${theme.greyscale.label};
    }
  }
  label {
    position: absolute;
    top: 16px;
    left: 24px;
    color: ${theme.greyscale.placeholer};
    transform: translateY(0%);
    transition: all 0.3s ease;
    pointer-events: none;
  }
  span {
    position: absolute;
    left: 0;
    right: 0;
    top: 74%;
    bottom: 26%;
    border: 1px dashed ${theme.greyscale.line};
  }
  button {
    ${theme.text.xsmall};
    margin-top: 10px;
    color: ${theme.greyscale.label};
    background: transparent;
    font-weight: bold;
    flex: 1;
    ${theme.flexCenter}
    align-items: flex-start;
    width: 100%;
  }

  :focus-within {
    background: ${theme.greyscale.offWhite};
    border: 1px solid ${theme.greyscale.titleActive};
    span {
      border-color: ${theme.greyscale.titleActive};
    }
  }
`;
