import React from "react";
import styled, { css } from "styled-components";
import {
  InputWrapMediaStyle,
  InputWrapErrorStyle,
  InputLabelStyle,
  InputTagStyle,
} from "@/styles/Common";
import useTextArea, { TextAreaProps } from "@/hooks/useTextArea";
import { Text, Input } from "@/components/atoms";

const ContentTextArea = ({ name }: any) => {
  const { value, type, count, ...props }: TextAreaProps = useTextArea({
    initialValue: name,
  });
  return (
    <WrapEl className={type}>
      <Text type="xsmall" className={type} cssValue={TextAreaTitle}>
        코멘트를 입력하세요
      </Text>
      <Input type="textarea" className={type} name={value} {...props} />
      <TextAreaDivLine />
      <Text type="xsmall" className={type} cssValue={TextAreaCount}>
        {count}
      </Text>
      <Input type="file" />
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
  ${() => InputWrapMediaStyle}
  ${() => InputWrapErrorStyle}
`;

const TextAreaDivLine = styled.div<any>`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 74%;
  bottom: 26%;
  border: 1px dashed ${({ theme }) => theme.color.line};
  height: 0px;
  width: 340px;
`;

const TextAreaTitle = css`
  ${() => InputLabelStyle}
  width: 292px;
  height: 20px;
  color: ${({ theme }) => theme.color.label};
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
  color: ${({ theme }) => theme.color.label};
  &.typing {
    animation: fade-in 0.5s;
    animation-fill-mode: forwards;
    display: flex;
  }
`;
