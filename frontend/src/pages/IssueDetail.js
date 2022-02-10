import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";

import { useRecoilState, useRecoilValue } from "recoil";
import { issueState } from "../_state";
import { useIssuesActions } from "../_actions/issues.actions";

import Header from "@components/organisms/Header";
import IssueDetailHeader from "@components/organisms/IssueDetailHeader";
import IssueDetailContent from "@components/organisms/IssueDetailContent";

export default function IssueDetail() {
  const issuesActions = useIssuesActions();
  const params = useParams();

  const [issue, setIssue] = useRecoilState(issueState);

  useEffect(() => {
    const currentId = params.id;
    issuesActions.getIssue(currentId);
  }, []);

  return (
    <div>
      <Header />
      <IssueDetailHeader />
      <LineTop />
      <IssueDetailContent />
    </div>
  );
}

const LineTop = styled.hr`
  margin: 32px 80px;
  background-color: ${(props) => props.theme.greyscale.line};
`;
