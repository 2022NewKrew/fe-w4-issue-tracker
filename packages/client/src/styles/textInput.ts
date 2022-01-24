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

export const TextInputBasicStyle = () =>
  css`
    ${theme.text.small}
    position: relative;
    overflow: hidden;
    input {
      height: 100%;
      width: 100%;
      background: ${theme.greyscale.inputBackgound};
      color: ${theme.greyscale.titleActive};
      padding: 0px 24px;
      :required:focus:valid {
        ${VaildStyle("success")}
      }
      :not([value=""]):focus:invalid {
        ${VaildStyle("error")}
      }
      :not([value=""]) {
        padding-top: 4%;
        + label {
          transform: translateY(-18%);
          ${theme.text.xsmall};
        }
      }
      :focus {
        background: ${theme.greyscale.offWhite};
        border: 1px solid ${theme.greyscale.titleActive};
      }
    }
    label {
      position: absolute;
      padding-left: 3px;
      left: 24px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      width: 100%;
      height: 28px;
      text-align: left;
      ${theme.text.small};
      color: ${theme.greyscale.placeholer};
      transform: translateY(0%);
      transition: all 0.3s ease;
      pointer-events: none;
    }
  `;

export const TextInputStyle = {
  large: css`
    ${TextInputBasicStyle()}
    width: 340px;
    height: 64px;
    input {
      border-radius: 16px;
    }
  `,
  medium: css`
    ${TextInputBasicStyle()}
    width: 320px;
    height: 56px;
    input {
      border-radius: 14px;
    }
  `,
  small: css`
    ${TextInputBasicStyle()}
    width: 300px;
    height: 40px;
    label {
      height: 40px;
      display: flex;
      align-items: center;
    }
    input {
      border-radius: 11px;
      padding-left: 112px;
      :not([value=""]) {
        padding-top: 0;
        + label {
          transform: translateY(0);
        }
      }
    }
  `,
};
