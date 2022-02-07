import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";

import IssueTableHeader from "@components/organisms/IssueTableHeader";
import IssueTableCell from "../organisms/IssueTableCell";
import { LargeText } from "@components/atoms/Text";

import { useIssuesActions } from "../../_actions/issues.actions";
import {
  issuesState,
  openIssuesState,
  closedIssuesState,
  activeIssueTabState,
} from "../../_state";
import { useRecoilValue } from "recoil";

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
  const issues = useRecoilValue(issuesState);
  const openIssues = useRecoilValue(openIssuesState);
  const closedIssues = useRecoilValue(closedIssuesState);
  const activeIssueTab = useRecoilValue(activeIssueTabState);

  const issuesActions = useIssuesActions();

  useEffect(() => {
    issuesActions.getIssues();
  }, []);

  const [selectedIssueIds, setSelectedIssueIds] = useState([]);

  function checkSelected(id) {
    if (selectedIssueIds && selectedIssueIds.indexOf(id) > -1) return true;
    else return false;
  }

  const currentIssues = activeIssueTab === "open" ? openIssues : closedIssues;

  const issueList =
    currentIssues &&
    currentIssues.map((issue) => (
      <IssueTableCell
        key={issue.num}
        selected={checkSelected(issue.id)}
        selectedIssueIds={selectedIssueIds}
        setSelectedIssueIds={setSelectedIssueIds}
        info={issue}
      />
    ));

  return (
    <Container className='clearfix'>
      <IssueTableHeader
        selectedIssueIds={selectedIssueIds}
        setSelectedIssueIds={setSelectedIssueIds}
        issues={issues}
      />
      {issueList}
    </Container>
  );
}
