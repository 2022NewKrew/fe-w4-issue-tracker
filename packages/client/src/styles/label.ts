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
}

const LabelStyle = ({ size, type = NONE }: ILabelStyle) => css`
  ${theme.flexCenter}
  ${theme.text.xsmall}
  border-radius: 30px;
  ${{
    [LARGE]: css`
      width: 100px;
      height: 40px;
    `,
    [SMALL]: css`
      max-width: 90px;
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
      color: ${theme.greyscale.titleActive};
    `,
    [LINE]: css`
      background: ${theme.greyscale.body};
      color: ${theme.greyscale.titleActive};
    `,
    [NONE]: css`
      background: ${theme.greyscale.body};
      color: ${theme.greyscale.titleActive};
    `,
  }[type]}
`;

export default LabelStyle;
