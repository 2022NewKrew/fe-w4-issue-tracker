import React from "react";
import styled from "styled-components";
import { ButtonProps, StyleProps } from "./index";
import { ButtonContentStyle, ButtonStyle } from "@/styles/Common";

const ButtonMediumStandard: React.FC<ButtonProps> = ({ name, children, ...props }) => {
  return (
    <ButtonMediumStandardEl {...props}>
      <ButtonMediumStandardContent>{name}</ButtonMediumStandardContent>
    </ButtonMediumStandardEl>
  );
};
const ButtonMediumStandardEl = styled.button<StyleProps>`
  ${ButtonStyle}
  padding: 0px 24px;
  width: 240px;
  height: 56px;
  background: ${({ theme }) => theme.color.primary};
  border-radius: 20px;
  &:hover {
    background: ${({ theme }) => theme.color.primaryC1};
  }
  &:active {
    background: ${({ theme }) => theme.color.primary};
    border: 4px solid ${({ theme }) => theme.color.primaryC2};
  }
  &:disabled {
    background: ${({ theme }) => theme.color.primary};
    opacity: 0.5;
  }
`;
const ButtonMediumStandardContent = styled.div<StyleProps>`
  ${ButtonContentStyle}
  width: 192px;
  height: 32px;
  font-size: 18px;
  line-height: 32px;
  color: ${({ theme }) => theme.color.offWhite};
`;
export default ButtonMediumStandard;
