import React from "react";
import styled from "styled-components";
import { StyleProps, TextProps, TextStyle } from "./index";

const TextSmall = ({ children, props }: TextProps) => {
  return <TextSmallEl {...props}>{children}</TextSmallEl>;
};

const TextSmallEl = styled.div<StyleProps>`
  ${() => TextStyle}
  width: 184px;
  height: 56px;
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.body};
  margin: ${props => props.margin};
`;
export default TextSmall;
