import ButtionStyle from "./style";

interface ButtonProps {
  children: React.ReactNode;
  type: "standard" | "secondary" | "text";
  color: "primary" | "secondary" | "success" | "error";
  size: "large" | "medium" | "small";
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  width?: string | number;
}

const Button = ({
  children,
  type,
  color,
  size,
  disabled,
  onClick,
  width,
}: ButtonProps) => {
  return (
    <button
      css={[ButtionStyle({ type, color, size }), { width }]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "standard",
  color: "primary",
};

export default Button;
