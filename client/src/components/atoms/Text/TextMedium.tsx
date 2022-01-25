import React from "react";
import styled from "styled-components";
import { StyleProps, TextProps, TextStyle } from "./index";

const TextMedium = ({ className, children, props }: TextProps) => {
  return (
    <TextMediumEl className={className} {...props}>
      {children}
    </TextMediumEl>
  );
};

const TextMediumEl = styled.div<StyleProps>`
  ${() => TextStyle}
  width: 207px;
  height: 64px;
  font-size: 18px;
  line-height: 32px;
  color: ${({ theme }) => theme.color.body};
  margin: ${props => props.margin};
  ${props => () => props.cssValue}
`;
export default TextMedium;
