import Icon from "@UI/Icon";

import { IconName, LayoutProps } from "@interface/components";
import styled from "@emotion/styled";
import { Size } from "src/@types/emotion";
import { Theme } from "@emotion/react";
import { useClickLink } from "@hooks";

export interface Props extends SProps, LayoutProps {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: IconName;
  link?: string;
  type?: "button" | "submit";
}

const Button = ({
  children,
  shape,
  color,
  size,
  disabled,
  onClick,
  icon,
  link,
  type = "button",
}: Props) => {
  const onClickLink = useClickLink(link);

  return (
    <SButton
      className="Button"
      type={type}
      shape={shape}
      color={color}
      size={size}
      disabled={disabled}
      onClick={link ? onClickLink : onClick}
    >
      {icon && <Icon className="btn_icon" name={icon} />}
      {children}
    </SButton>
  );
};

export default Button;

type Color = "primary" | "secondary" | "error" | "success";
type Shape = "standard" | "secondary" | "text";

interface SProps {
  size: Size;
  color?: Color;
  shape?: Shape;
}

const SButton = styled.button<SProps>`
  ${({ theme }) => theme.FlexCenter};
  flex-direction: row;
  font-weight: bold;
  ${({ shape = "standard", color = "primary" }) => shapeList(color)[shape]}
  ${({ size, shape = "standard", theme }) => sizeList(shape, theme)[size]}
  .btn_icon {
    position: static;
    margin-right: 4px;
  }
`;

function shapeList(color: Color) {
  return {
    standard: `
    color: var(--offWhite);
    background: var(--${color}-default);
    :hover:enabled:not(:active){
      background: var(--${color}-dark);
    }
    :active{
      border: 4px solid var(--${color}-light);
    }

  `,
    secondary: `
    color: var(--${color}-default);
    background: var(--offWhite);
    border: 2px solid var(--${color}-default);
    :hover:enabled:not(:active){
      color: var(--${color}-dark);
      border-color: var(--${color}-dark);
    }
    :active{
      color: var(--${color}-default);
      border-color: var(--${color}-dark);
      border: 4px solid var(--${color}-light);
    }
    .btn_icon {
      opacity: 0.5;
    }
    :hover .btn_icon {
      opacity: 1;
    }
  `,
    text: `
    color: var(--label);
    background: transparent;
    :hover:enabled:not(:active){
      color: var(--body);
    }
    :active{
      color: var(--titleActive);
    }
    .btn_icon {
      opacity: 0.5;
    }
    :hover .btn_icon {
      opacity: 1;
    }
  `,
  };
}

function sizeList(shape: Shape, theme: Theme) {
  return shape === "text"
    ? {
        large: ``,
        medium: `
        ${theme.FontSize.small};
          height: 56px;
        `,
        small: `
        ${theme.FontSize.xsmall};
          height: 40px;
        `,
      }
    : {
        large: `
        ${theme.FontSize.medium};
          width: 340px;
          height: 64px;
          padding: 0 24px;
          border-radius: 20px;
        `,
        medium: `
        ${theme.FontSize.medium};
          width: 240px;
          height: 56px;
          padding: 0 24px;
          border-radius: 20px;
        `,
        small: `
        ${theme.FontSize.xsmall};
          width: 120px;
          height: 40px;
          padding: 0 16px;
          border-radius: 11px;
        `,
      };
}
