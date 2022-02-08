import React from "react";
import styled from "styled-components";
import { Wrapper } from "@atoms";

const IssueCreationFormWrapper = styled.form``;

const IssueCreationFormHeader = styled(Wrapper)``;

const IssueCreationFormInputWrapper = styled(Wrapper)``;

function IssueCreationForm() {
  return (
    <IssueCreationFormWrapper>
      <IssueCreationFormHeader>새로운 이슈 작성</IssueCreationFormHeader>
      <IssueCreationFormInputWrapper>
        <div>profileImg</div>
        <div>
          <input placeholder={"제목"} />
          <div>
            <textarea placeholder={"코멘트를 입력하세요."} defaultValue={""} />
            <div>파일첨부</div>
          </div>
        </div>
        <div>
          <div>assignee selection</div>
          <div>milestone selection</div>
          <div>label selection</div>
        </div>
      </IssueCreationFormInputWrapper>
    </IssueCreationFormWrapper>
  );
}

export default IssueCreationForm;
