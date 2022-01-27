import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface LabelProps {
  size?: "large" | "small";
  type?: "open" | "close" | "dark" | "light" | "line" | "custom";
  color: string;
}

const Label = styled.label<LabelProps>`
  ${({
    theme: { text, colors, greyscale },
    size = "small",
    type = "custom",
    color,
  }) => css`
    display: flex;
    align-items: center;
    ${text.xsmall}

    border-radius: 30px;
    padding: 4px 16px;
    ${{
      large: css`
        height: 40px;
      `,
      small: css`
        height: 28px;
      `,
    }[size]}

    ${{
      open: css`
        background: ${colors.primary.light};
        border: 1px solid ${colors.primary.default};
        color: ${colors.primary.default};
      `,
      close: css`
        background: #ccd4ff;
        border: 1px solid #0025e7;
        color: #0025e7;
      `,
      dark: css`
        background: ${greyscale.background};
        color: ${greyscale.titleActive};
      `,
      light: css`
        background: ${greyscale.body};
        color: ${greyscale.offWhite};
      `,
      line: css`
        background: ${greyscale.offWhite};
        color: ${greyscale.line};
        border: 1px solid ${greyscale.line};
      `,
      custom: css`
        color: ${greyscale.offWhite};
        background: ${color};
      `,
    }[type]}
  `}
`;

export default Label;
