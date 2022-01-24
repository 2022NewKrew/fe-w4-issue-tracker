import { css } from "@emotion/react";
import theme from "@styles/theme";
import { CSSIF } from "@utils/helper";
import { buttonType, colorType, sizeType } from "src/@types/emotion";

const LARGE = "large";
const MEDIUM = "medium";
const SMALL = "small";

const STANDARD = "standard";
const SECONDARY = "secondary";
const TEXT = "text";

const PRIMARY = "primary";

interface IButtonStyle {
  size: sizeType;
  color?: colorType;
  type?: buttonType;
}

export const ButtionStyle = ({
  size,
  color = PRIMARY,
  type = STANDARD,
}: IButtonStyle) => css`
  ${theme.flexCenter}
  padding: 0 ${CSSIF(size !== SMALL, "24px", "16px")};

  // font style
  ${CSSIF(size !== SMALL, theme.text.medium, theme.text.xsmall)}
  font-weight: bold;
  color: ${{
    [STANDARD]: theme.greyscale.offWhite,
    [SECONDARY]: theme.colors[color].default,
    [TEXT]: theme.greyscale.label,
  }[type]};

  border: ${CSSIF(
    type === SECONDARY,
    `2px solid ${theme.colors[color].default}`
  )};
  border-radius: ${CSSIF(size !== SMALL, "20px", "11px")};

  ${{
    [STANDARD]: css`
      color: ${theme.greyscale.offWhite};
      background: ${theme.colors[color].default};
    `,
    [SECONDARY]: css`
      color: ${theme.colors[color].default};
      background: ${theme.greyscale.offWhite};
    `,
    [TEXT]: css`
      color: ${theme.greyscale.label};
      background: transparent;
    `,
  }[type]};

  ${{
    [LARGE]: css`
      width: 340px;
      height: 64px;
    `,
    [MEDIUM]: css`
      width: 240px;
      height: 56px;
    `,
    [SMALL]: css`
      width: 120px;
      height: 40px;
    `,
  }[size]}

  ${type === TEXT &&
  css`
    width: max-content;
    height: 32px;
  `}

  :hover:enabled:not(:active) {
    ${{
      [STANDARD]: css`
        background: ${theme.colors[color].dark};
      `,
      [SECONDARY]: css`
        color: ${theme.colors[color].dark};
        border-color: ${theme.colors[color].dark};
      `,
      [TEXT]: css`
        color: ${theme.greyscale.body};
      `,
    }[type]};
  }
  :active {
    ${{
      [STANDARD]: css`
        border: 4px solid ${theme.colors[color].light};
      `,
      [SECONDARY]: css`
        color: ${theme.colors[color].default};
        border-color: ${theme.colors[color].dark};
        border: 4px solid ${theme.colors[color].light};
      `,
      [TEXT]: css`
        color: ${theme.greyscale.titleActive};
      `,
    }[type]};
  }
`;
