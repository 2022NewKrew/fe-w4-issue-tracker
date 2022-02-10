import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import {
  BigProfileImg,
  MediumStandardButton,
  MediumTextInput,
  Wrapper,
} from "@atoms";
import { IssueSidebar } from "@organisms";

import { COLOR, ISSUE_PROP_TYPE } from "@constants";

import { getAuth, putIssue } from "@/firebase.js";
import { CommentInput } from "@molecules";

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

const CreateIssueButtonWrapper = styled(Wrapper)`
  margin-top: 20px;
  width: 100%;
  align-items: flex-end;
`;

function IssueCreationForm() {
  const [optionValues, setOptionValues] = useState({});
  const formRef = useRef(null);
  const navigate = useNavigate();
  const auth = getAuth();
  const clickIssueCreateButton = async (e) => {
    e.preventDefault();
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

  return (
    <>
      <FormInputWrapper ref={formRef}>
        <BigProfileImg src={auth.currentUser.photoURL} />
        <TextInputWrapper>
          <TitleInput placeholder={"제목"} name={"title"} />
          <CommentInput />
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
