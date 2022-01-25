import React from "react";
import { css } from "styled-components";
import TextLarge from "./TextLarge";
import TextMedium from "./TextMedium";
import TextSmall from "./TextSmall";
import TextXSmall from "./TextXSmall";

export interface TextProps {
  className?: string;
  children?: string;
  margin?: string;
  padding?: string;
  textAlign?: string;
  cssValue?: any;
  props?: any;
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

interface TextFactoryProps extends TextProps {
  type: string;
}
const Text: React.FC<TextFactoryProps> = ({ type, children, cssValue, ...props }) => {
  switch (type) {
    case "large":
      return (
        <TextLarge cssValue={cssValue} {...props}>
          {children}
        </TextLarge>
      );
    case "medium":
      return (
        <TextMedium cssValue={cssValue} {...props}>
          {children}
        </TextMedium>
      );
    case "small":
      return (
        <TextSmall cssValue={cssValue} {...props}>
          {children}
        </TextSmall>
      );
    case "xsmall":
      return (
        <TextXSmall cssValue={cssValue} {...props}>
          {children}
        </TextXSmall>
      );
    default:
      return (
        <TextLarge cssValue={cssValue} {...props}>
          {children}
        </TextLarge>
      );
  }
};

/** Common Styles **/

export const TextStyle = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
`;
export default Text;
