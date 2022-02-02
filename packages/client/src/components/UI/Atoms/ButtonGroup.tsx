import styled from "@emotion/styled";

export interface SProps {
  direction?: "row" | "column";
  gap: number | string;
}

const ButtonGroup = styled.div<SProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  & > button + button {
    ${({ direction = "row", gap }) =>
      direction === "row" ? `margin-left: ${gap}px` : `margin-top: ${gap}px`}
  }
`;

export default ButtonGroup;
