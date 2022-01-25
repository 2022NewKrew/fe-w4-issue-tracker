import React from "react";
import styled from "styled-components";
import { StyleProps, TextProps, TextStyle } from "./index";

const TextLarge = ({ children, props }: TextProps) => {
  return <TextLargeEl {...props}>{children}</TextLargeEl>;
};

const TextLargeEl = styled.div<StyleProps>`
  ${() => TextStyle}
  width: 276px;
  height: 80px;
  font-size: 24px;
  line-height: 40px;
  color: ${({ theme }) => theme.color.body};
  margin: ${props => props.margin};
`;
export default TextLarge;
