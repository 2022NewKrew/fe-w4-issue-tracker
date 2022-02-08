import React from "react";
import styled, { css } from "styled-components";
import { PaperClip } from "@/components/atoms/Icons";
import { theme } from "@/styles/theme";
import { IStyle } from "@/constants/type";

interface IFileInput {
  name?: string;
  className?: string;
  styles?: IStyle;
}
const FileInput: React.FC<IFileInput> = ({ styles, ...props }) => {
  const Props = {
    FileInputWrapProps: {
      ...styles,
    },
    FileLabelProps: {
      className: "input-file-button",
      htmlFor: "input-file",
      ...styles,
    },
  };
  return (
    <FileInputWrap {...Props.FileInputWrapProps}>
      <TextAreaFileLabel {...Props.FileLabelProps}>
        <PaperClip color="#6E7191" />
        <div>파일 첨부하기</div>
      </TextAreaFileLabel>
      <HiddenInput />
    </FileInputWrap>
  );
};

const FileInputWrap = styled.div`
  width: 200px;
`;
const HiddenInput = styled.input.attrs(() => ({
  type: "file",
  id: "input-file",
  style: { display: "none" },
}))``;
const TextAreaFileLabel = styled.label<IStyle>`
  ${({ margin, width, childCSS }) => css`
    color: ${theme.color.label};
    margin: ${margin ?? ""};
    width: ${width ?? "200px"};
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    height: 20px;
    & > div {
      line-height: 16px;
      font-size: small;
      margin-left: 8px;
    }
    ${childCSS ?? ""};
  `}
`;
export default FileInput;
