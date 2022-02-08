import React from "react";
import styled, { css } from "styled-components";
import { inputWrapMediaStyle, inputWrapErrorStyle, inputLabelStyle } from "@/styles/common";
import { theme } from "@/styles/theme";
import useTextArea, { TextAreaProps } from "@/hooks/useTextArea";
import { Text, FileInput, TextArea } from "@/components/atoms";
import { IStyle } from "@/constants/type";

interface IContentTextAreaProps {
  name?: string;
  styles?: IStyle;
}
const ContentTextArea: React.FC<IContentTextAreaProps> = ({
  name = "코멘트를 입력하세요",
  styles,
}) => {
  const { value, type, count, ...props }: TextAreaProps = useTextArea({
    initialValue: name,
  });

  const Props = {
    WrapProps: {
      className: type,
      styles: {
        margin: styles?.margin,
        width: styles?.width,
      },
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
      styles: {
        margin: "16px 24px",
        width: styles?.width,
        height: styles?.height,
      },
      ...props,
    },
    TextCountProps: {
      className: type,
      styles: { childCSS: TextAreaCount, width: "" },
    },
    FileInputProps: {
      styles: {
        margin: "16px 24px",
      },
    },
  };

  return (
    <WrapEl {...Props.WrapProps}>
      <Text type="xsmall" {...Props.TextLabelProps}>
        코멘트를 입력하세요
      </Text>
      <TextArea {...Props.TextAreaProps} />
      <Text type="xsmall" {...Props.TextCountProps}>
        {count}
      </Text>
      <FileInput {...Props.FileInputProps} />
    </WrapEl>
  );
};
export default ContentTextArea;

const WrapEl = styled.div<any>`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 16px;
  width: fit-content;
  ${inputWrapMediaStyle}
  ${inputWrapErrorStyle}
  ${({ styles }) => css`
    margin: ${styles.margin ?? ""};
  `}
`;
const TextAreaTitle = css`
  ${inputLabelStyle}
  height: 20px;
  margin-top: 16px;
  margin-left: 24px;
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
  right: 30px;
  bottom: 60px;
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
