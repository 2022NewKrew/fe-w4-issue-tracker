import { css } from "@emotion/react";
import theme from "@styles/theme";

const LARGE = "large";
const SMALL = "small";

const OPEN = "open";
const CLOSE = "close";
const DARK = "dark";
const LIGHT = "light";
const LINE = "line";
const NONE = "none";

interface ILabelStyle {
  size: "large" | "small";
  type?: "open" | "close" | "dark" | "light" | "line" | "none";
  color?: string;
  background?: string;
}

const LabelStyle = ({
  size,
  type = NONE,
  color = "",
  background = "",
}: ILabelStyle) => css`
  /* ${theme.flexCenter} */
  display: inline-block;
  ${theme.text.xsmall}
  border-radius: 30px;
  padding: 4px 16px;
  ${{
    [LARGE]: css`
      height: 40px;
    `,
    [SMALL]: css`
      height: 28px;
    `,
  }[size]}

  ${{
    [OPEN]: css`
      background: ${theme.colors.primary.light};
      border: 1px solid ${theme.colors.primary.default};
      color: ${theme.colors.primary.default};
    `,
    [CLOSE]: css`
      background: #ccd4ff;
      border: 1px solid #0025e7;
      color: #0025e7;
    `,
    [DARK]: css`
      background: ${theme.greyscale.background};
      color: ${theme.greyscale.titleActive};
    `,
    [LIGHT]: css`
      background: ${theme.greyscale.body};
      color: ${theme.greyscale.offWhite};
    `,
    [LINE]: css`
      background: ${theme.greyscale.offWhite};
      color: ${theme.greyscale.line};
      border: 1px solid ${theme.greyscale.line};
    `,
    [NONE]: css`
      color: ${color};
      background: ${background};
    `,
  }[type]}
`;

export default LabelStyle;
