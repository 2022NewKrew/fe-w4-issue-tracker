import React from "react";
import styled from "styled-components";
import { ButtonProps, StyleProps } from "./index";
import { ButtonContentStyle, ButtonStyle } from "@/styles/Common";

const ButtonLarge: React.FC<ButtonProps> = ({ name, children, ...props }) => {
  return (
    <ButtonLargeEl {...props}>
      <ButtonLargeContent>{name}</ButtonLargeContent>
    </ButtonLargeEl>
  );
};
const ButtonLargeEl = styled.button<StyleProps>`
  ${ButtonStyle}
  padding: 0px 24px;
  width: 340px;
  height: 64px;
  background: ${props => (props.color ? props.color : props.theme.color.primary)};
  border-radius: 20px;
  &:hover {
    background: ${props => (props.color ? props.color : props.theme.color.primary)};
  }
  &:active {
    background: ${props => (props.color ? props.color : props.theme.color.primary)};
    border: 4px solid ${props => (props.color ? props.color : props.theme.color.primaryC2)};
  }
  &:disabled {
    background: ${props => (props.color ? props.color : props.theme.color.primary)};
    opacity: 0.5;
  }
  margin: ${props => props.margin};
`;
const ButtonLargeContent = styled.div`
  ${ButtonContentStyle}
  width: 292px;
  height: 32px;
  font-size: 18px;
  line-height: 32px;
  color: ${({ theme }) => theme.color.offWhite};
`;

export default ButtonLarge;
