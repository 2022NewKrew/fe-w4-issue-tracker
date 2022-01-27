import React, { FunctionComponent, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Color } from "@/common/designSystem";

interface TextAreaProps {
  textAreaValue: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  addFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommentTextArea: FunctionComponent<TextAreaProps> = ({
  textAreaValue,
  onChange,
  addFile,
}) => {
  const delayTime = 2000;
  const showTextLengthTimer = useRef<ReturnType<typeof setTimeout>>();
  const [textAreaLengthInfo, setTextAreaLengthInfo] = useState("");
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const textAreaValueChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (showTextLengthTimer.current) {
      clearTimeout(showTextLengthTimer.current);
    }
    showTextLengthTimer.current = setTimeout(() => {
      setTextAreaLengthInfo(getTextAreaLength());
      const clearTextLengthTimer = setTimeout(() => {
        setTextAreaLengthInfo("");
        clearTimeout(clearTextLengthTimer);
      }, delayTime);
      if (showTextLengthTimer.current) {
        clearTimeout(showTextLengthTimer.current);
      }
    }, delayTime);
    onChange(event);
  };

  const getTextAreaLength = () => {
    const textAreaLength = textAreaValue.length;
    return textAreaLength === 0 ? "" : `띄어쓰기 포함 ${textAreaLength}자`;
  };

  const addFileClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Wrapper>
      <TextAreaWrapper>
        <TextArea
          value={textAreaValue}
          onChange={textAreaValueChange}
        ></TextArea>
        <Label>코멘트를 입력하세요</Label>
        <TextLengthInfo>{textAreaLengthInfo}</TextLengthInfo>
      </TextAreaWrapper>
      <AddFileWrapper onClick={addFileClick}>
        <FileInput type="file" ref={fileInputRef} onChange={addFile} />
        <FileNameSpan>파일 첨부하기</FileNameSpan>
      </AddFileWrapper>
    </Wrapper>
  );
};

const textFontStyle = css`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
`;

const Wrapper = styled.div`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  width: max-content;
  background: ${Color.InputBackground};
  &:active,
  &:focus-within {
    background: ${Color.offWhite};
    border: 1px solid ${Color.TitleActive};
  }
`;

const TextAreaWrapper = styled.div`
  position: relative;
`;

const TextLengthInfo = styled.label`
  position: absolute;
  ${textFontStyle}
  font-size: 12px;
  line-height: 20px;
  text-align: right;
  bottom: 20px;
  right: 30px;
  color: ${Color.Label};
`;

const Label = styled.label`
  ${textFontStyle}
  position: absolute;
  top: 16px;
  left: 24px;
  pointer-events: none;
  color: ${Color.Placeholder};
`;

const TextArea = styled.textarea`
  ${textFontStyle}
  display: block;
  border: none;
  border-radius: 16px;
  outline: none;
  background: transparent;
  width: 340px;
  height: 200px;
  padding-top: 44px;
  padding-left: 24px;
  box-sizing: border-box;

  &:focus {
    + label {
      color: ${Color.Label};
      font-size: 12px;
      line-height: 20px;
    }
  }
`;

const AddFileWrapper = styled.div`
  border-top: 1px dashed ${Color.Line};
  height: 52px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 25px;
`;

const FileNameSpan = styled.span`
  color: ${Color.Label};
  pointer-events: none;
  font-size: 12px;
  line-height: 20px;
`;

const FileInput = styled.input`
  display: none;
`;

export default CommentTextArea;
