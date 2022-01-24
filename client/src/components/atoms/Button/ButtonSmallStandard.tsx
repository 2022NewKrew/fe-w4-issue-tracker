import React from "react";
import styled from "styled-components";
import { Plus } from "@/components/atoms/Icons";
import { ButtonProps, StyleProps, ButtonStyle, ButtonContentStyle } from "./index";

const ButtonSmallStandard: React.FC<ButtonProps> = ({ name, children }) => {
  return (
    <ButtonSmallStandardEl>
      <Plus />
      <ButtonSmallStandardContent>{name}</ButtonSmallStandardContent>
    </ButtonSmallStandardEl>
  );
};

const ButtonSmallStandardEl = styled.button<StyleProps>`
  ${() => ButtonStyle}
  padding: 0px 16px;
  width: 120px;
  height: 40px;
  background: ${({ theme }) => theme.color.primary};
  border-radius: 11px;

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
  & > svg {
    margin: 0px 4px;
  }
`;
const ButtonSmallStandardContent = styled.div`
  ${() => ButtonContentStyle};
  width: 50px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  padding-top: 2px;
  color: ${({ theme }) => theme.color.offWhite};
`;
export default ButtonSmallStandard;
