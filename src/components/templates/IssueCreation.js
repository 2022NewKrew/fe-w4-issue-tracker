import React from "react";
import styled from "styled-components";

import { RegularDisplay, Wrapper } from "@atoms";
import { IssueCreationForm } from "@organisms";

const IssueCreationFormWrapper = styled(Wrapper)`
  width: 100%;
`;

const IssueCreationHeader = styled(Wrapper)`
  height: 48px;
  width: 100%;
  flex-direction: row;
  justify-content: left;
  padding: 32px 0;
`;

function issueCreation() {
  return (
    <IssueCreationFormWrapper>
      <IssueCreationHeader>
        <RegularDisplay>새로운 이슈 작성</RegularDisplay>
      </IssueCreationHeader>
      <IssueCreationForm />
    </IssueCreationFormWrapper>
  );
}

export default issueCreation;
