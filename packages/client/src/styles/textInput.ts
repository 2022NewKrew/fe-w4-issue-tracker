import { css } from "@emotion/react";
import theme from "@styles/theme";
import { colorsKey } from "./emotion";

const VaildStyle = (color: colorsKey) => css`
  background: ${theme.colors[color].light};
  border-color: ${theme.colors[color].default};
  + label {
    color: ${theme.colors[color].dark};
  }
`;

export const InputTextWrapper = css`
  position: relative;
  label {
    position: absolute;
    padding-left: 3px;
    left: 24px;
    bottom: 18px;
    width: 292px;
    height: 28px;
    text-align: left;
    ${theme.text.small};
    color: ${theme.greyscale.placeholer};
    transform: translateY(0%);
    transition: all 0.3s ease;
    pointer-events: none;
  }
  input:not([value=""]) {
    padding-top: 20px;
    + label {
      transform: translateY(-40%);
      font-size: 12px;
    }
  }
  input:required:not(:focus):valid {
    ${VaildStyle("success")}
  }
  input:not([value=""]):not(:focus):invalid {
    ${VaildStyle("error")}
  }
`;

export const InputBasicStyle = () =>
  css`
    ${theme.flexCenter}
    ${theme.text.small}
    background: ${theme.greyscale.inputBackgound};
    padding: 0px 24px;
    color: ${theme.greyscale.titleActive};
    :focus {
      background: ${theme.greyscale.offWhite};
      border: 1px solid ${theme.greyscale.titleActive};
    }
  `;

export const InputStyle = {
  large: css`
    ${InputBasicStyle()}
    width: 340px;
    height: 64px;
    border-radius: 16px;
  `,
  medium: css`
    ${InputBasicStyle()}
    width: 320px;
    height: 56px;
    border-radius: 14px;
  `,
  small: css`
    ${InputBasicStyle()}
    width: 300px;
    height: 40px;
    border-radius: 11px;
  `,
};
