import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { Wrapper } from "@atoms";
import { IssueDetailHeader, IssueDetailContent } from "@organisms";

import { exactIssueState } from "@stores";

const IssueDetailFormWrapper = styled(Wrapper)`
  width: 100%;
`;

function IssueDetail() {
  const { issueId } = useParams();
  const navigate = useNavigate();
  const issueData = useRecoilValue(exactIssueState(issueId));

  if (!issueData) {
    alert("잘못된 이슈 아이디입니다!");
    navigate("/issuelist");
    return <></>;
  }

  return (
    <IssueDetailFormWrapper>
      <IssueDetailHeader {...issueData} />
      <IssueDetailContent {...issueData} />
    </IssueDetailFormWrapper>
  );
}

export default IssueDetail;
