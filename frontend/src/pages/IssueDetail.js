import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";

import { useRecoilState, useRecoilValue } from "recoil";
import { issueState } from "../_state";
import { useIssuesActions } from "../_actions/issues.actions";

import Header from "@components/organisms/Header";
import IssueDetailHeader from "@components/organisms/IssueDetailHeader";
import IssueDetailContent from "@components/organisms/IssueDetailContent";

import { Comment } from "@components/molecules/Comment";

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
      <Comment
        username='user1'
        type='initial'
        content='코멘트는 이렇게 보여집니다.'
        timestamp={"20220210"}
      />
      <Comment
        username='user1'
        type='open'
        content='이슈가 다시 열렸습니다'
        timestamp={"20220210"}
      />
      <Comment
        username='user1'
        type='closed'
        content='이슈가 닫혔습니다'
        timestamp={"20220210"}
      />
    </div>
  );
}

const LineTop = styled.hr`
  margin: 32px 80px;
  background-color: ${(props) => props.theme.greyscale.line};
`;
