import React from "react";
import styled from "styled-components";
import theme from "@/styles/Theme";
import { Plus } from "@/components/atoms/Icons";
import { ButtonProps, StyleProps, ButtonStyle, ButtonContentStyle } from "./index";

const ButtonTextSmall: React.FC<ButtonProps> = ({ name }) => {
  return (
    <ButtonTextSmallEl>
      <Plus color="#6E7191" />
      <ButtonTextSmallContent>{name}</ButtonTextSmallContent>
    </ButtonTextSmallEl>
  );
};
const ButtonTextSmallEl = styled.button<StyleProps>`
  ${() => ButtonStyle};
  width: 70px;
  height: 32px;
  /* border-radius: 20px; */
  color: ${({ theme }) => theme.color.label};
  &:hover {
    color: ${({ theme }) => theme.color.body};
  }
  &:active {
    color: ${({ theme }) => theme.color.titleActive};
  }
  &:disabled {
    opacity: 0.5px;
  }
  & > svg {
    width: 16px;
    height: 16px;
  }
`;
const ButtonTextSmallContent = styled.div`
  width: 50px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  ${() => ButtonContentStyle}
`;
export default ButtonTextSmall;
