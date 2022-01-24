import React from "react";
import styled from "styled-components";
import { StyleProps, InputProps } from "./index";
import {
  InputWrapStyle,
  InputLabelStyle,
  InputTagStyle,
  InputWrapMediaStyle,
  InputWrapErrorStyle,
} from "@/styles/Common";
import useInput, { TextInputProps } from "@/hooks/useInput";

const TextInputSmall: React.FC<InputProps> = ({ name, children }) => {
  const { value, type, ...props }: TextInputProps = useInput({
    initialValue: name,
    inputType: "TextInputSmall",
  });
  return (
    <WrapEl className={type}>
      <Label className={type}>{name}</Label>
      <Input placeholder={value} {...props} />
    </WrapEl>
  );
};

const WrapEl = styled.div<StyleProps>`
  ${() => InputWrapStyle}
  width: 300px;
  height: 40px;
  border-radius: 16px;

  ${() => InputWrapMediaStyle}
  ${() => InputWrapErrorStyle}
`;
const Label = styled.label<StyleProps>`
  ${() => InputLabelStyle}
  width: 80px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.label};
  &.filled,
  &.typing {
    display: flex;
  }
`;
const Input = styled.input`
  ${() => InputTagStyle}
  width: 252px;
  height: 38px;
  font-size: 16px;
  line-height: 28px;
`;

export default TextInputSmall;
