import Icon from "@icon";

import { ButtonProps, ButtonStyleProps } from "@interface/components";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Button = ({
  children,
  shape,
  color,
  size,
  disabled,
  onClick,
  icon,
  link,
}: ButtonProps) => {
  const navigate = useNavigate();
  const onClickLink = useCallback(() => {
    navigate(link as string);
  }, []);

  return (
    <StyledButton
      shape={shape}
      color={color}
      size={size}
      disabled={disabled}
      onClick={link ? onClickLink : onClick}
    >
      {icon && <Icon name={icon} />}
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<ButtonStyleProps>`
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
      margin-right: 4px;
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
            justify-content: space-between;
          `,
          small: css`
            ${text.xsmall};
            height: 40px;
            border-radius: 11px;
            justify-content: space-between;
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
