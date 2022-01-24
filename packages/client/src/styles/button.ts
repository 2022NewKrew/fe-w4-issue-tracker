import { css } from "@emotion/react";
import { colorsKey } from "./emotion";
import theme from "@styles/theme";
import { CSSIF } from "@utils/helper";

export const ButtonBasicStyle = (color: colorsKey, reverse: boolean) =>
  css`
    ${theme.flexCenter}
    font-weight: bold;
    color: ${CSSIF(
      reverse,
      theme.colors[color].default,
      theme.greyscale.offWhite
    )};
    background: ${CSSIF(
      reverse,
      theme.greyscale.offWhite,
      theme.colors[color].default
    )};
    border: ${CSSIF(reverse, `2px solid ${theme.colors[color].default}`)};
    :hover:enabled:not(:active) {
      color: ${CSSIF(reverse, theme.colors[color].dark)};
      background: ${CSSIF(
        reverse,
        theme.greyscale.offWhite,
        theme.colors[color].dark
      )};
      border-color: ${CSSIF(reverse, theme.colors[color].dark)};
    }
    :active {
      color: ${CSSIF(reverse, theme.colors[color].default)};
      background: ${CSSIF(
        reverse,
        theme.greyscale.offWhite,
        theme.colors[color].default
      )};
      border: 4px solid ${theme.colors[color].light};
    }
  `;

export const ButtionStyle = (color: colorsKey, reverse = false) => ({
  large: css`
    ${ButtonBasicStyle(color, reverse)}
    ${theme.text.medium}
    width: 340px;
    height: 64px;
    border-radius: 20px;
    padding: 0px 24px;
  `,
  medium: css`
    ${ButtonBasicStyle(color, reverse)}
    ${theme.text.medium}
    width: 240px;
    height: 56px;
    border-radius: 20px;
    padding: 0px 24px;
  `,
  small: css`
    ${ButtonBasicStyle(color, reverse)}
    ${theme.text.small}
    width: 120px;
    height: 40px;
    border-radius: 11px;
    padding: 0px 16px;
  `,
});
