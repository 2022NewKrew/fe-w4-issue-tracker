import React from "react";
import styled, { css } from "styled-components";
import { inputWrapMediaStyle, inputWrapErrorStyle, inputLabelStyle } from "@/styles/common";
import { theme } from "@/styles/theme";
import useTextArea, { TextAreaProps } from "@/hooks/useTextArea";
import { Text, FileInput, TextArea } from "@/components/atoms";

const ContentTextArea = ({ name }: any) => {
  const { value, type, count, ...props }: TextAreaProps = useTextArea({
    initialValue: name,
  });

  const Props = {
    WrapProps: {
      className: type,
    },
    TextLabelProps: {
      className: type,
      styles: {
        childCSS: TextAreaTitle,
      },
    },
    TextAreaProps: {
      className: type,
      name: value,
      ...props,
    },
    TextCountProps: {
      className: type,
      styles: { childCSS: TextAreaCount },
    },
  };

  return (
    <WrapEl {...Props.WrapProps}>
      <Text type="xsmall" {...Props.TextLabelProps}>
        코멘트를 입력하세요
      </Text>
      <TextArea {...Props.TextAreaProps} />
      <TextAreaDivLine />
      <Text type="xsmall" {...Props.TextCountProps}>
        {count}
      </Text>
      <FileInput />
    </WrapEl>
  );
};
export default ContentTextArea;

const WrapEl = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 24px;
  width: 340px;
  height: 200px;
  border-radius: 16px;
  position: relative;
  ${inputWrapMediaStyle}
  ${inputWrapErrorStyle}
`;

const TextAreaDivLine = styled.div<any>`
  left: 0%;
  right: 0%;
  top: 74%;
  bottom: 26%;
  position: absolute;
  border: 1px dashed ${theme.color.line};
  height: 0px;
  width: 340px;
`;

const TextAreaTitle = css`
  ${inputLabelStyle}
  width: 292px;
  height: 20px;
  color: ${theme.color.label};
  opacity: 0;
  &.typing,
  &.filled {
    animation: fade-in 1s;
    animation-fill-mode: forwards;
    display: flex;
  }
  .container {
    font-family: sans-serif;
  }
`;
const TextAreaCount = css`
  position: absolute;
  left: 62.65%;
  right: 8.82%;
  top: 54%;
  bottom: 36%;
  font-weight: 500;
  display: none;
  color: ${theme.color.label};
  &.typing,
  &.filled {
    animation: fade-in 0.5s;
    animation-fill-mode: forwards;
    display: flex;
  }
`;
