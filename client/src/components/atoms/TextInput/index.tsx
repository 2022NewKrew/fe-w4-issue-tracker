import React from "react";
import styled, { css } from "styled-components";
import {
  inputWrapStyle,
  inputLabelStyle,
  inputTagStyle,
  inputWrapMediaStyle,
  inputWrapSuccessStyle,
  inputWrapErrorStyle,
} from "@/styles/common";
import { theme } from "@/styles/theme";
import { TEXT_INPUT_TYPE, INPUT_TYPE } from "@/constants/type";
import useInput, { TextInputProps } from "@/hooks/useInput";
import { IStyle } from "@/constants/type";

// 여기서 button 의 타입에 맞게 css 를 반환해준다.
type TYPE_LARGE = "large";
type TYPE_MEDIUM = "medium";
type TYPE_SMALL = "small";
type TYPE_TEXT_AREA = "textarea";
type TYPE_FILE = "file";
type TYPE_COLOR_CODE = "colorCode";

type inputType =
  | TYPE_LARGE
  | TYPE_MEDIUM
  | TYPE_SMALL
  | TYPE_TEXT_AREA
  | TYPE_FILE
  | TYPE_COLOR_CODE;

export interface IInputProps {
  type: inputType;
  name: string;
  styles?: IStyle;
  icon?: any;
  id?: string;
  label?: string;
}

const TextInput: React.FC<IInputProps> = ({ type, name, styles, icon, id, label }) => {
  const { value, className, onChange, onFocus, onBlur }: TextInputProps = useInput({
    initialValue: type === TEXT_INPUT_TYPE.COLOR_CODE ? "#000000" : name,
    inputType: type,
    loginType: name,
  });

  const Props = {
    StyledWrapProps: {
      type,
      className,

      ...styles,
    },
    StyledLabelProps: {
      className,
    },
    StyledInputProps: {
      type,
      name,
      id,
      label,
      onChange,
      onFocus,
      onBlur,
      placeholder: value,
    },
  };

  return (
    <StyledWrap {...Props.StyledWrapProps}>
      <StyledLabel {...Props.StyledLabelProps}>{name}</StyledLabel>
      <StyledInput {...Props.StyledInputProps}></StyledInput>
      {icon && icon({ color: theme.color.label, cursor: "pointer" })}
    </StyledWrap>
  );
};

const StyledWrap = styled.div<any>`
  ${({ type, width, margin }) => {
    switch (type) {
      case TEXT_INPUT_TYPE.LARGE:
        return css`
          flex-wrap: wrap;
          width: 340px;
          height: 64px;
          ${inputWrapSuccessStyle};
          ${inputWrapErrorStyle};
          ${StyledLabel} {
            font-size: 12px;
            width: 292px;
            height: 20px;
            line-height: 20px;
          }
          ${StyledInput} {
            width: 292px;
            height: 28px;
          }
          flex-direction: column;
        `;
      case TEXT_INPUT_TYPE.MEDIUM:
        return css`
          flex-wrap: wrap;
          width: ${width ?? "320px"};
          height: 56px;
          ${StyledLabel} {
            font-size: 12px;
            line-height: 20px;
            width: 80px;
            height: 20px;
          }
          ${StyledInput} {
            width: 272px;
            height: 28px;
          }
        `;
      case TEXT_INPUT_TYPE.SMALL:
        return css`
          ${inputWrapErrorStyle};
          width: 300px;
          height: 40px;
          ${StyledLabel} {
            font-size: 12px;
            padding-top: 6px;
            width: 80px;
            height: 20px;
          }
          ${StyledInput} {
            width: 252px;
            height: 38px;
          }
        `;
      case TEXT_INPUT_TYPE.COLOR_CODE:
        return css`
          width: 240px;
          height: 40px;
          ${StyledLabel} {
            display: flex;
            font-size: 12px;
            width: 80px;
            height: 30px;
            line-height: 30px;
          }
          ${StyledInput} {
            width: 80px;
            height: 30px;
            line-height: 30px;
            font-size: 16px;
          }
        `;
      default:
        return css``;
    }
  }};
  ${inputWrapStyle};
  ${inputWrapMediaStyle};
  border-radius: 16px;
  position: relative;
  ${({ margin }) => css`
    margin: ${margin};
  `}
`;
const StyledLabel = styled.label`
  ${inputLabelStyle};
  color: ${theme.color.label};
  &.filled,
  &.typing {
    display: flex;
    margin-top: 5px;
  }
  &.success {
    display: flex;
    color: ${theme.color.success};
  }
  &.error {
    display: flex;
    color: ${theme.color.error};
  }
`;
const StyledInput = styled.input.attrs(({ name }) => {
  if (name === INPUT_TYPE.PASSWORD) {
    return { type: "password" };
  }
})`
  ${inputTagStyle};
  font-size: 16px;
`;

export default TextInput;
