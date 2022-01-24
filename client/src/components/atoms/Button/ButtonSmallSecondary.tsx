import React from "react";
import styled from "styled-components";
import { Plus } from "@/components/atoms/Icons";
import { ButtonProps, StyleProps, ButtonStyle, ButtonContentStyle } from "./index";

const ButtonSmallSecondary = ({ name, props }: ButtonProps) => {
  return (
    <ButtonSmallSecondaryEl>
      <Plus color="#007AFF" />
      <ButtonSmallSecondaryContent>{name}</ButtonSmallSecondaryContent>
    </ButtonSmallSecondaryEl>
  );
};
const ButtonSmallSecondaryEl = styled.button<StyleProps>`
  ${() => ButtonStyle}
  box-sizing: border-box;
  width: 120px;
  height: 40px;
  background: ${({ theme }) => theme.color.offWhite};
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 11px;

  &:hover {
    border: 2px solid ${({ theme }) => theme.color.primaryC1};
  }
  &:active {
    border: 4px solid ${({ theme }) => theme.color.primaryC2};
    box-sizing: border-box;
  }
  &:disabled {
    opacity: 0.5;
    border: 2px solid ${({ theme }) => theme.color.primary};
  }
  & > svg {
    margin: 0px 4px;
  }
`;

const ButtonSmallSecondaryContent = styled.div<StyleProps>`
  ${() => ButtonContentStyle};
  width: 50px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.primary};
`;
export default ButtonSmallSecondary;
