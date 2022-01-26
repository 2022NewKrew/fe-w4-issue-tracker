import Icon, { IconName } from "../Icon";
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
}: ButtonProps) => {
  return (
    <button
      css={[ButtionStyle({ type, color, size }), { width }]}
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
