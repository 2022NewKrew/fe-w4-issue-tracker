import LabelStyle from "./style";

interface LabelProps {
  children: React.ReactNode;
  size: "large" | "small";
  type: "open" | "close" | "dark" | "light" | "line" | "custom";
  color: string;
}

const Label = ({ children, size, type, color }: LabelProps) => {
  return (
    <label
      css={LabelStyle({
        size,
        type,
        color,
      })}
    >
      {children}
    </label>
  );
};

Label.defaultProps = {
  size: "small",
  type: "custom",
};

export default Label;
