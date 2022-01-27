import Icon, { IconName } from "@icon";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { buttonType, colorType, sizeType } from "src/@types/emotion";

interface Props extends ButtonProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: IconName;
}

const Button = (props: Props) => {
  const { children, shape, color, size, disabled, onClick, icon } = props;
  return (
    <StyledButton
      shape={shape}
      color={color}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <Icon name={icon} />}
      {children}
    </StyledButton>
  );
};

export default Button;

interface ButtonProps {
  size: sizeType;
  color?: colorType;
  shape?: buttonType;
}

const StyledButton = styled.button<ButtonProps>`
  ${({
    theme: { text, greyscale, colors, flexCenter },
    size,
    color = "primary",
    shape = "standard",
  }) => css`
    font-weight: bold;
    ${flexCenter}
    flex-direction: row;
    & > svg {
      position: static;
    }
    ${{
      standard: css`
        color: ${greyscale.offWhite};
        background: ${colors[color].default};
      `,
      secondary: css`
        color: ${colors[color].default};
        background: ${greyscale.offWhite};
        border: 2px solid ${colors[color].default};
      `,
      text: css`
        color: ${greyscale.label};
        background: transparent;
      `,
    }[shape]};
    ${(shape === "text"
      ? {
          medium: css`
            ${text.medium};
            height: 56px;
            border-radius: 20px;
          `,
          small: css`
            ${text.xsmall};
            height: 40px;
            border-radius: 11px;
          `,
        }
      : {
          large: css`
            ${text.medium};
            width: 340px;
            height: 64px;
            padding: 0 24px;
            border-radius: 20px;
          `,
          medium: css`
            ${text.medium};
            width: 240px;
            height: 56px;
            padding: 0 24px;
            border-radius: 20px;
          `,
          small: css`
            ${text.xsmall};
            width: 120px;
            height: 40px;
            padding: 0 16px;
            border-radius: 11px;
          `,
        })[size]}

    :hover:enabled:not(:active) {
      ${{
        standard: css`
          background: ${colors[color].dark};
        `,
        secondary: css`
          color: ${colors[color].dark};
          border-color: ${colors[color].dark};
        `,
        text: css`
          color: ${greyscale.body};
        `,
      }[shape]};
    }
    :active {
      ${{
        standard: css`
          border: 4px solid ${colors[color].light};
        `,
        secondary: css`
          color: ${colors[color].default};
          border-color: ${colors[color].dark};
          border: 4px solid ${colors[color].light};
        `,
        text: css`
          color: ${greyscale.titleActive};
        `,
      }[shape]};
    }
  `}
`;
