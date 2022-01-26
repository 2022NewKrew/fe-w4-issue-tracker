import { css, Theme } from "@emotion/react";

const TextAreaStyle = ({ text, greyscale, flexCenter }: Theme) => css`
  background: ${greyscale.inputBackground};
  border-radius: 16px;
  padding: 10px;
  position: relative;
  width: 100%;
  ${flexCenter}
  ${text.small};
  textarea {
    background: transparent;
    width: 100%;
    height: 60%;
    margin-bottom: 10px;
    padding: 34px 0 0 14px;
    :not(:placeholder-shown) + label {
      ${text.xsmall};
      color: ${greyscale.label};
    }
  }
  label {
    position: absolute;
    top: 16px;
    left: 24px;
    color: ${greyscale.placeholer};
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
    border: 1px dashed ${greyscale.line};
  }
  button {
    ${text.xsmall};
    margin-top: 10px;
    color: ${greyscale.label};
    background: transparent;
    font-weight: bold;
    flex: 1;
    ${flexCenter}
    align-items: flex-start;
    width: 100%;
  }

  :focus-within {
    background: ${greyscale.offWhite};
    border: 1px solid ${greyscale.titleActive};
    span {
      border-color: ${greyscale.titleActive};
    }
  }
`;

export default TextAreaStyle;
