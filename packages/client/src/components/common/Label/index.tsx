import { useTheme } from "@emotion/react";
import LabelStyle from "./style";

interface LabelProps {
  children: React.ReactNode;
  size: "large" | "small";
  type: "open" | "close" | "dark" | "light" | "line" | "custom";
  color: string;
}

const Label = ({ children, size, type, color }: LabelProps) => {
  const theme = useTheme();
  return (
    <label
      css={LabelStyle(
        {
          size,
          type,
          color,
        },
        theme
      )}
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
