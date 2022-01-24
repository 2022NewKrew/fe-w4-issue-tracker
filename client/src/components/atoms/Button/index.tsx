import React from "react";
import { css } from "styled-components";
import ButtonLarge from "./ButtonLarge";
import ButtonMediumStandard from "./ButtonMediumStandard";
import ButtonSmallSecondary from "./ButtonSmallSecondary";
import ButtonSmallStandard from "./ButtonSmallStandard";
import ButtonTextMedium from "./ButtonTextMedium";
import ButtonTextSmall from "./ButtonTextSmall";

export interface ButtonProps {
  name: string;
  color?: string;
  props?: Record<string, any>;
  margin?: string;
  padding?: string;
  textAlign?: string;
  cssValue?: any;
}
export interface StyleProps {
  theme: {
    color: {
      primary?: string;
      primaryC1?: string;
      primaryC2?: string;
      label?: string;
      body?: string;
      titleActive?: string;
      offWhite?: string;
    };
  };
  margin?: string;
  padding?: string;
  textAlign?: string;
  cssValue?: any;
}

interface ButtonFactoryProps extends ButtonProps {
  type: string;
}
const Button: React.FC<ButtonFactoryProps> = ({ type, color, name, ...props }) => {
  switch (type) {
    case "large":
      return <ButtonLarge name={name} color={color} {...props}></ButtonLarge>;
    case "mediumStandard":
      return <ButtonMediumStandard name={name} color={color} {...props}></ButtonMediumStandard>;
    case "smallSecondary":
      return <ButtonSmallSecondary name={name} color={color} {...props}></ButtonSmallSecondary>;
    case "smallStandard":
      return <ButtonSmallStandard name={name} color={color} {...props}></ButtonSmallStandard>;
    case "textMedium":
      return <ButtonTextMedium name={name} color={color} {...props}></ButtonTextMedium>;
    case "textSmall":
      return <ButtonTextSmall name={name} color={color} {...props}></ButtonTextSmall>;
    default:
      return <ButtonLarge name={name} color={color} {...props}></ButtonLarge>;
  }
};

export const ButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonContentStyle = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  padding-top: 2px;
  flex: none;
  flex-grow: 0;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
`;

export default Button;
