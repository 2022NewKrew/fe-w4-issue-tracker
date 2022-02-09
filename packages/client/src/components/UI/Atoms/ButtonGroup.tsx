import { LayoutProps } from "@emotion/react";
import styled from "@emotion/styled";

const ButtonGroup = ({
  direction = "row",
  gap,
  children,
}: SProps & LayoutProps) => {
  return (
    <SButtonGroup className="ButtonGroup" direction={direction} gap={gap}>
      {children}
    </SButtonGroup>
  );
};

export interface SProps {
  direction?: "row" | "column";
  gap: number | string;
}

const SButtonGroup = styled.div<SProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  & > button + button {
    ${({ direction = "row", gap }) =>
      direction === "row" ? `margin-left: ${gap}px` : `margin-top: ${gap}px`}
  }
`;

export default ButtonGroup;
