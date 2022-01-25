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
  margin?: string;
  padding?: string;
  textAlign?: string;
  cssValue?: any;
  children?: React.ReactNode;
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
const Button: React.FC<ButtonFactoryProps> = ({ type, name, ...props }) => {
  switch (type) {
    case "large":
      return <ButtonLarge name={name} {...props}></ButtonLarge>;
    case "mediumStandard":
      return <ButtonMediumStandard name={name} {...props}></ButtonMediumStandard>;
    case "smallSecondary":
      return <ButtonSmallSecondary name={name} {...props}></ButtonSmallSecondary>;
    case "smallStandard":
      return <ButtonSmallStandard name={name} {...props}></ButtonSmallStandard>;
    case "textMedium":
      return <ButtonTextMedium name={name} {...props}></ButtonTextMedium>;
    case "textSmall":
      return <ButtonTextSmall name={name} {...props}></ButtonTextSmall>;
    default:
      return <ButtonLarge name={name} {...props}></ButtonLarge>;
  }
};

export default Button;
