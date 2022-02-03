import styled from "@emotion/styled";
import { LayoutProps } from "@interface/components";

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
