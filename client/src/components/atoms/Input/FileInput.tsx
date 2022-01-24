import React from "react";
import styled from "styled-components";
import { StyleProps, InputProps } from "./index";
import { PaperClip } from "@/components/atoms/Icons";

const FileInput: React.FC<InputProps> = ({ type }) => {
  return (
    <>
      <TextAreaFileLabel className="input-file-button" htmlFor={type + "-file"}>
        <PaperClip color="#6E7191"></PaperClip>
        <div>파일 첨부하기</div>
      </TextAreaFileLabel>
      <input type="file" id={type + "-file"} style={{ display: "none" }}></input>
    </>
  );
};

const TextAreaFileLabel = styled.label<StyleProps>`
  display: flex;
  cursor: pointer;
  align-items: center;
  position: absolute;
  left: 7.06%;
  right: 65.59%;
  top: 82%;
  bottom: 8%;
  width: 340px;
  height: 20px;
  width: 292px;
  color: ${({ theme }) => theme.color.label};
  & > div {
    line-height: 16px;
    font-size: small;
    margin-left: 8px;
  }
`;
export default FileInput;
