import React from "react";
import styled from "styled-components";
import { StyleProps, TextProps, TextStyle } from "./index";

const TextXSmall = ({ className, children, ...props }: TextProps) => {
  return (
    <TextXSmallEl className={className} {...props}>
      {children}
    </TextXSmallEl>
  );
};

const TextXSmallEl = styled.div<StyleProps>`
  ${() => TextStyle}
  width: 138px;
  height: 40px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  margin: ${props => props.margin};
  ${props => () => props.cssValue}
`;
export default TextXSmall;
