import React, { useEffect, useState } from "react";
import styled from "styled-components";

import IssueTableHeader from "@components/organisms/IssueTableHeader";
import IssueTableCell from "../organisms/IssueTableCell";

import { useIssuesActions } from "../../_actions/issues.actions";
import {
  issuesState,
  openIssuesState,
  closedIssuesState,
  activeIssueTabState,
} from "../../_state";
import { useRecoilValue, useRecoilState } from "recoil";

const Container = styled.div`
  margin: 0 80px;

  .clearfix:before,
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    overflow: hidden;
  }

  .clearfix:after {
    clear: both;
  }

  .clearfix {
    zoom: 1;
  }
`;

export default function IssueTableContainer() {
  const [issues, setIssues] = useRecoilState(issuesState);
  const openIssues = useRecoilValue(openIssuesState);
  const closedIssues = useRecoilValue(closedIssuesState);
  const activeIssueTab = useRecoilValue(activeIssueTabState);

  const issuesActions = useIssuesActions();

  useEffect(() => {
    issuesActions.getIssues();
    return () => setIssues();
  }, []);

  const [selectedIssueIds, setSelectedIssueIds] = useState([]);

  function checkSelected(id) {
    if (selectedIssueIds && selectedIssueIds.indexOf(id) > -1) return true;
    else return false;
  }

  function issueList() {
    // 열린이슈/닫힌이슈 탭에 따라 보여질 이슈 선택
    const currentIssues = activeIssueTab === "open" ? openIssues : closedIssues;
    const issueList =
      currentIssues &&
      currentIssues.map((issue) => (
        <IssueTableCell
          key={issue.id}
          selected={checkSelected(issue.id)}
          selectedIssueIds={selectedIssueIds}
          setSelectedIssueIds={setSelectedIssueIds}
          info={issue}
        />
      ));
    return issueList;
  }

  return (
    <Container className='clearfix'>
      <IssueTableHeader
        selectedIssueIds={selectedIssueIds}
        setSelectedIssueIds={setSelectedIssueIds}
        issues={issues}
      />
      {issueList()}
    </Container>
  );
}
