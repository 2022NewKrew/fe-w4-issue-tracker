import { LayoutProps } from "@emotion/react";
import styled from "@emotion/styled";

const ButtonGroup = ({ gap, children }: SProps & LayoutProps) => {
  return (
    <SButtonGroup className="ButtonGroup" gap={gap}>
      {children}
    </SButtonGroup>
  );
};

export interface SProps {
  gap: number | string;
}

const SButtonGroup = styled.div<SProps>`
  display: flex;
  & > button + button {
    margin-left: ${({ gap }) => `${gap}px`};
  }
`;

export default ButtonGroup;
