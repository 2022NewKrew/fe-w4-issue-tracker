import React from "react";
import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";
import { IStyle } from "@/constants/type";

interface InputProps {
  name?: string;
  className?: string;
  styles?: IStyle;
}

const TextArea: React.FC<InputProps> = ({ name, styles, ...props }) => {
  const TextAreaInputProps = {
    placeholder: name,
    ...styles,
    ...props,
  };
  return <TextAreaInput {...TextAreaInputProps} />;
};

const TextAreaInput = styled.textarea<IStyle>`
  ${({ margin, width }) => css`
    display: table-row;
    width: ${width ?? "292px"};
    height: 300px;
    min-height: 300px;
    resize: vertical;
    &.typing,
    &.filled {
      height: 260px;
      margin-top: 0px;
    }
    color: ${theme.color.label};
    font-size: 16px;
    line-height: 28px;
    background-color: inherit;
    border-bottom: 0px solid black;
    :focus-visible,
    :focus-within,
    :focus {
      outline: 1px solid rgba(255, 255, 255, 0);
      border: 0px solid rgba(255, 255, 255, 0);
    }
    margin: ${margin ?? "auto"};
  `}
`;

export default TextArea;
