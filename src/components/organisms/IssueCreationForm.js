import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { PaperclipIcon } from "@icons";
import {
  BigProfileImg,
  MediumStandardButton,
  MediumTextInput,
  Wrapper,
  XSmallLinkText,
} from "@atoms";
import { IssueSidebar } from "@organisms";

import { ACTION_TYPE, COLOR, ISSUE_PROP_TYPE } from "@constants";

import { getAuth, putIssue } from "@/firebase.js";

const FormInputWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  border-top: 1px solid ${COLOR.GREYSCALE.LINE};
  border-bottom: 1px solid ${COLOR.GREYSCALE.LINE};
  box-sizing: border-box;
  padding: 20px;
`;

const TextInputWrapper = styled(Wrapper)`
  position: relative;
  width: 100%;
  justify-content: space-between;
  margin: 0 20px;
`;

const TitleInput = styled(MediumTextInput)`
  width: 100%;
`;

const CommentInputWrapper = styled(Wrapper)`
  margin-top: 20px;
  position: relative;
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

const CreateIssueButtonWrapper = styled(Wrapper)`
  margin-top: 20px;
  width: 100%;
  align-items: flex-end;
`;

function IssueCreationForm() {
  const [optionValues, setOptionValues] = useState({});
  const formRef = useRef(null);
  const navigate = useNavigate();

  const clickIssueCreateButton = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const currentUserId = auth.currentUser.uid;
    const { title, contents } = formRef.current;
    if (!title.value.trim().length) {
      return alert("제목이 올바르게 입력되지 않았습니다!");
    }
    if (!contents.value.trim().length) {
      return alert("내용이 올바르게 입력되지 않았습니다!");
    }
    const issueData = {
      title: formRef.current.title.value,
      comment: [
        {
          writer: currentUserId,
          text: formRef.current.contents.value,
          timestamp: new Date(),
        },
      ],
      label: optionValues[ISSUE_PROP_TYPE.LABEL],
      assignee: optionValues[ISSUE_PROP_TYPE.ASSIGNEE],
      milestone: optionValues[ISSUE_PROP_TYPE.MILESTONE],
      writer: currentUserId,
      isOpened: true,
      timestamp: new Date(),
    };
    await putIssue(issueData);
    navigate("/issuelist");
  };

  const auth = getAuth();
  return (
    <>
      <FormInputWrapper ref={formRef}>
        <BigProfileImg src={auth.currentUser.photoURL} />
        <TextInputWrapper>
          <TitleInput placeholder={"제목"} name={"title"} />
          <CommentInputWrapper>
            <InputTextArea
              placeholder={"코멘트를 입력하세요."}
              defaultValue={""}
              name={"contents"}
            />
            <AddFileButton>
              <PaperclipIcon />
              <AddFileButtonText>파일 첨부하기</AddFileButtonText>
            </AddFileButton>
          </CommentInputWrapper>
        </TextInputWrapper>
        <IssueSidebar setOptionValues={setOptionValues} />
      </FormInputWrapper>
      <CreateIssueButtonWrapper>
        <MediumStandardButton
          color={COLOR.BLUE}
          onClick={clickIssueCreateButton}
        >
          이슈 작성
        </MediumStandardButton>
      </CreateIssueButtonWrapper>
    </>
  );
}

export default IssueCreationForm;
