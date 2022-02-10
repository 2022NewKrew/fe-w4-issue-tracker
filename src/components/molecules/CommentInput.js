import React from "react";
import styled from "styled-components";

import { PaperclipIcon } from "@icons";
import { BigProfileImg, Wrapper, XSmallLinkText } from "@atoms";

import { COLOR } from "@constants";

const CommentInputWrapper = styled(Wrapper)`
  margin-top: 20px;
  position: relative;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
`;

const TextAreaWrapper = styled(Wrapper)`
  margin: 0 20px;
  width: 100%;
`;

const InputTextArea = styled.textarea`
  width: 100%;
  background: ${COLOR.GREYSCALE.INPUT_BACKGROUND};
  border-color: transparent;
  box-sizing: border-box;
  height: 340px;
  padding: 24px;

  &:focus {
    background: ${COLOR.GREYSCALE.OFF_WHITE};
    border: 1px solid ${COLOR.GREYSCALE.TITLE_ACTIVE};
  }
  border-radius: 14px 14px 0 0;
`;

const AddFileButton = styled(Wrapper)`
  position: relative;
  width: 100%;
  flex-direction: row;
  background-color: ${COLOR.GREYSCALE.INPUT_BACKGROUND};
  border-top: 1px dashed ${COLOR.GREYSCALE.LINE};
  padding: 10px 24px;
  box-sizing: border-box;
  border-radius: 0 0 14px 14px;
`;

const AddFileButtonText = styled(XSmallLinkText)`
  margin: 5px 10px;
  width: 100%;
`;

function CommentInput({ photoUrl }) {
  return (
    <CommentInputWrapper>
      {photoUrl && <BigProfileImg src={photoUrl} />}
      <TextAreaWrapper>
        <InputTextArea
          placeholder={"코멘트를 입력하세요."}
          defaultValue={""}
          name={"contents"}
        />
        <AddFileButton>
          <PaperclipIcon />
          <AddFileButtonText>파일 첨부하기</AddFileButtonText>
        </AddFileButton>
      </TextAreaWrapper>
    </CommentInputWrapper>
  );
}

export default CommentInput;
