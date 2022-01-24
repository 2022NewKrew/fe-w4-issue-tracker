import React from "react";
import styled from "styled-components";
import theme from "@/styles/Theme";
import { Plus } from "@/components/atoms/Icons";
import { ButtonProps, StyleProps, ButtonStyle, ButtonContentStyle } from "./index";

const ButtonTextMedium: React.FC<ButtonProps> = ({ name }) => {
  return (
    <ButtonTextMediumEl>
      <Plus color={theme.color.label} />
      <ButtonTextMediumContent>{name}</ButtonTextMediumContent>
    </ButtonTextMediumEl>
  );
};
const ButtonTextMediumEl = styled.button<StyleProps>`
  ${() => ButtonStyle}
  width: 87px;
  height: 32px;

  border-radius: 20px;
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
`;
const ButtonTextMediumContent = styled.div`
  ${() => ButtonContentStyle}
  width: 67px;
  height: 28px;

  font-size: 16px;
  line-height: 28px;
  padding-top: 2px;
`;

export default ButtonTextMedium;
