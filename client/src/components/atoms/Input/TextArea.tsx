import React from "react";
import styled from "styled-components";
import { StyleProps, InputProps } from "./index";
import { InputTagStyle } from "@/styles/Common";

const TextArea: React.FC<InputProps> = ({ name, ...props }) => {
  return <TextAreaInput placeholder={name} {...props} />;
};

const TextAreaInput = styled.textarea<StyleProps>`
  border-radius: 20px;
  width: 292px;
  height: 120px;
  &.typing,
  &.filled,
  &.active {
    height: 100px;
  }
  color: ${({ theme }) => theme.color.label};
  font-size: 16px;
  line-height: 28px;
  ${() => InputTagStyle}
`;

export default TextArea;
