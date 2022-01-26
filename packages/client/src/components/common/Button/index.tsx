import Icon, { IconName } from "@icon";

import { useTheme } from "@emotion/react";
import ButtionStyle from "./style";

interface ButtonProps {
  children: React.ReactNode;
  type: "standard" | "secondary" | "text";
  color: "primary" | "secondary" | "success" | "error";
  size: "large" | "medium" | "small";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  width?: string | number;
  icon?: IconName;
}

const Button = ({
  children,
  type,
  color,
  size,
  disabled,
  onClick,
  width,
  icon,
  ...props
}: ButtonProps) => {
  const theme = useTheme();
  return (
    <button
      css={[ButtionStyle({ type, color, size }, theme), { width }]}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <Icon name={icon} />}
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "standard",
  color: "primary",
};

export default Button;
