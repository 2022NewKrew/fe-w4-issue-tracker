import { ButtonGroupProps, ButtonGroupStyleProps } from "@interface/components";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

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

const Wrapper = styled.div<ButtonGroupStyleProps>`
  ${({ direction, gap }) => css`
    display: flex;
    flex-direction: ${direction};
    & > button + button {
      ${direction === "row" ? `margin-left: ${gap}px` : `margin-top: ${gap}px`}
    }
  `}
`;

export default ButtonGroup;
