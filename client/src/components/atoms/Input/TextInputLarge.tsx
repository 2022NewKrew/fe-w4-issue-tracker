import React from "react";
import styled from "styled-components";
import { StyleProps, InputProps } from "./index";
import {
  InputWrapStyle,
  InputLabelStyle,
  InputTagStyle,
  InputWrapMediaStyle,
  InputWrapSuccessStyle,
  InputWrapErrorStyle,
  InputMessageMediaStyle,
} from "@/styles/Common";
import useInput, { TextInputProps } from "@/hooks/useInput";

const SUCCESS_MESSAGE = "사용 가능한 아이디 입니다!";
const ERROR_MESSAGE = "이미 사용하고 있는 아이디 입니다!";

const TextInputLarge: React.FC<InputProps> = ({ name, margin }) => {
  const { value, type, ...props }: TextInputProps = useInput({
    initialValue: name,
    inputType: "TextInputLarge",
  });
  return (
    <WrapEl className={type} margin={margin}>
      <Label className={type}>{name}</Label>
      <Input placeholder={value} {...props} />
      {name === "아이디" && (
        <InputMessage className={type}>
          {type === "success" ? SUCCESS_MESSAGE : ERROR_MESSAGE}
        </InputMessage>
      )}
    </WrapEl>
  );
};

const WrapEl = styled.div<StyleProps>`
  ${() => InputWrapStyle}
  ${() => InputWrapMediaStyle}
  ${() => InputWrapSuccessStyle}
  ${() => InputWrapErrorStyle}
  width: 340px;
  height: 64px;
  border-radius: 16px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: ${props => props.margin};
`;
const Label = styled.label`
  ${() => InputLabelStyle}
  ${() => InputMessageMediaStyle}
  width: 292px;
  height: 20px;
  line-height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.label};
  &.filled,
  &.typin {
    display: flex;
  }
`;
const InputMessage = styled.div`
  ${() => InputLabelStyle}
  ${() => InputMessageMediaStyle}
  position: absolute;
  top: 64px;
  font-size: 12px;
  line-height: 20px;
`;
const Input = styled.input`
  ${() => InputTagStyle}
  width: 292px;
  height: 28px;
  font-size: 16px;
  line-height: 28px;
`;

export default TextInputLarge;
