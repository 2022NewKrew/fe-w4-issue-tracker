import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ButtonGroupProps extends ButtonGroupStyleProps {
  children: React.ReactNode;
}

const ButtonGroup = ({
  children,
  direction = "row",
  gap,
}: ButtonGroupProps) => {
  return (
    <Wrapper direction={direction} gap={gap}>
      {children}
    </Wrapper>
  );
};

interface ButtonGroupStyleProps {
  direction: "row" | "column";
  gap: number | string;
}

const Wrapper = styled.div<ButtonGroupStyleProps>`
  ${({ direction, gap }) => css`
    display: flex;
    flex-direction: ${direction};
    margin-left: ;
    & > button + button {
      ${direction === "row" ? `margin-left: ${gap}px` : `margin-top: ${gap}px`}
    }
  `}
`;

export default ButtonGroup;
