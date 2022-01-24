import React from "react";
import styled from "styled-components";
import { StyleProps, InputProps } from "./index";
import {
  InputWrapStyle,
  InputLabelStyle,
  InputTagStyle,
  InputWrapMediaStyle,
} from "@/styles/Common";
import useInput, { TextInputProps } from "@/hooks/useInput";

const TextInputMedium: React.FC<InputProps> = ({ name, children }) => {
  const { value, type, ...props }: TextInputProps = useInput({
    initialValue: name,
  });
  return (
    <WrapEl className={type}>
      <Label className={type}>제목</Label>
      <Input placeholder={value} {...props} />
    </WrapEl>
  );
};

const WrapEl = styled.div<StyleProps>`
  ${() => InputWrapStyle}
  width: 320px;
  height: 56px;
  border-radius: 16px;
  ${() => InputWrapMediaStyle}
`;
const Label = styled.label<StyleProps>`
  ${() => InputLabelStyle}
  width: 80px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.label};
  &.filled,
  &.typing {
    display: flex;
  }
`;
const Input = styled.input`
  ${() => InputTagStyle}
  width: 272px;
  height: 28px;
  font-size: 16px;
  line-height: 28px;
`;

export default TextInputMedium;
