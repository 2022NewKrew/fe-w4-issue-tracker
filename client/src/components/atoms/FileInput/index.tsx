import React from "react";
import styled from "styled-components";
import { PaperClip } from "@/components/atoms/Icons";
import { theme } from "@/styles/theme";

interface IInputProps {
  name?: string;
  className?: string;
  styles?: IStyleProps;
}
interface IStyleProps {
  margin?: string;
  padding?: string;
  textAlign?: string;
  childCSS?: any;
}

const FileInput: React.FC<IInputProps> = ({ ...props }) => {
  return (
    <>
      <TextAreaFileLabel className="input-file-button" htmlFor={"input-file"}>
        <PaperClip color="#6E7191"></PaperClip>
        <div>파일 첨부하기</div>
      </TextAreaFileLabel>
      <input type="file" id={"input-file"} style={{ display: "none" }}></input>
    </>
  );
};

const TextAreaFileLabel = styled.label<IStyleProps>`
  color: ${theme.color.label};
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
  & > div {
    line-height: 16px;
    font-size: small;
    margin-left: 8px;
  }
`;
export default FileInput;
