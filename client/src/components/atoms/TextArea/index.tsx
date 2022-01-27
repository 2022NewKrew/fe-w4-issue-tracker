import React from "react";
import styled from "styled-components";
import { theme } from "@/styles/theme";

const TextArea: React.FC<InputProps> = ({ name, ...props }) => {
  const TextAreaInputProps = {
    placeholder: name,
    ...props,
  };
  return <TextAreaInput {...TextAreaInputProps} />;
};

interface StyleProps {
  margin?: string;
  padding?: string;
  textAlign?: string;
  childCSS?: any;
}
interface InputProps {
  name?: string;
  className?: string;
  styles?: StyleProps;
}

const TextAreaInput = styled.textarea<StyleProps>`
  border-radius: 20px;
  width: 292px;
  height: 120px;
  &.typing,
  &.filled,
  &.active {
    height: 100px;
  }
  color: ${theme.color.label};
  font-size: 16px;
  line-height: 28px;
  background-color: inherit;
  border: 0px solid rgba(255, 255, 255, 0);
  :focus-visible,
  :focus-within,
  :focus {
    outline: 1px solid rgba(255, 255, 255, 0);
    border: 0px solid rgba(255, 255, 255, 0);
  }
`;

export default TextArea;
