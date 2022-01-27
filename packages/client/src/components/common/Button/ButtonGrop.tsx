import { css } from "@emotion/react";

type ButtonGroupProps = {
  direction: "row" | "column";
  rightAlign?: boolean;
  gap: number | string;
  children: React.ReactNode;
};

const ButtonGroup = ({ children, direction, gap }: ButtonGroupProps) => {
  return (
    <div
      css={[
        {
          display: "flex",
          flexDirection: direction,
        },
        gapStyle(direction, gap),
      ]}
    >
      {children}
    </div>
  );
};

ButtonGroup.defaultProps = {
  direction: "row",
  gap: "0.5rem",
};

const gapStyle = (direction: "row" | "column", gap: number | string) => {
  const marginType = direction === "row" ? "marginLeft" : "marginTop";
  return css({
    "button + button": {
      [marginType]: gap,
    },
  });
};

export default ButtonGroup;
