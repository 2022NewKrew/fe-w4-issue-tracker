import { css } from "@emotion/react";
import theme from "@styles/theme";
import { CSSIF } from "@utils/helper";
import { colorType, sizeType } from "src/@types/emotion";

const LARGE = "large";
const MEDIUM = "medium";
const SMALL = "small";

const SUCCESS = "success";
const ERROR = "error";

interface ITextInput {
  size: sizeType;
}

const VaildStyle = (color: colorType) => css`
  background: ${theme.colors[color].light};
  border-color: ${theme.colors[color].default};
  + label {
    color: ${theme.colors[color].dark};
  }
`;

const TextInputStyle = ({ size }: ITextInput) => css`
  ${theme.text.small}
  position: relative;
  overflow: hidden;
  width: 100%;
  ${{
    [LARGE]: css`
      height: 64px;
    `,
    [MEDIUM]: css`
      height: 56px;
    `,
    [SMALL]: css`
      height: 40px;
      label {
        height: 40px;
        display: flex;
        align-items: center;
      }
    `,
  }[size]}
  label {
    position: absolute;
    padding-left: 3px;
    left: 24px;
    top: 10px;
    bottom: 0;
    margin: auto 0;
    width: 100%;
    text-align: left;
    ${theme.text.small};
    line-height: 100%;
    color: ${theme.greyscale.placeholer};
    transform: translateY(0%);
    transition: all 0.3s ease;
    pointer-events: none;
  }
  input {
    height: 100%;
    width: 100%;
    background: ${theme.greyscale.inputBackground};
    color: ${theme.greyscale.titleActive};
    padding: 0px 24px;
    :required:focus:valid {
      ${VaildStyle(SUCCESS)}
    }
    :not([value=""]):focus:invalid {
      ${VaildStyle(ERROR)}
    }
    :not([value=""]) {
      padding-top: ${CSSIF(size !== SMALL, "4%")};
      + label {
        ${theme.text.xsmall};
        transform: ${CSSIF(size !== SMALL, "translateY(-18%)")};
      }
    }
    :focus {
      background: ${theme.greyscale.offWhite};
      border: 1px solid ${theme.greyscale.titleActive};
    }
    ${{
      [LARGE]: css`
        border-radius: 16px;
      `,
      [MEDIUM]: css`
        border-radius: 14px;
      `,
      [SMALL]: css`
        border-radius: 11px;
        padding-left: 112px;
      `,
    }[size]}
  }
`;

export default TextInputStyle;
