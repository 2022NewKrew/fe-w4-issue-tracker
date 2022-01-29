import React, { useState } from "react";
import styled from "styled-components";

import IssueTableHeader from "@components/organisms/IssueTableHeader";
import IssueTableCell from "../organisms/IssueTableCell";

const Container = styled.div`
  margin: 0 80px;

  /* border-radius: 16px; */
  /* border: 1px solid ${(props) => props.theme.greyscale.line}; */

  /* overflow: hidden; */

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
  const issues = [
    {
      id: 1,
      title: "FE 이슈트래커 개발",
      label: "documentation",
      author: "Lin",
      milestone: "마스터즈 코스",
      date: "2022년 1월 27일",
    },
    {
      id: 2,
      title: "북카페 홈페이지 개발",
      label: "documentation",
      author: "Genie",
      milestone: "비기너 코스",
      date: "2022년 1월 28일",
    },
    {
      id: 3,
      title: "카카오톡 개발",
      label: "documentation",
      author: "Min",
      milestone: "Advanced 코스",
      date: "2022년 1월 29일",
    },
  ];

  const [selectedIssueIds, setSelectedIssueIds] = useState([]);

  function checkSelected(id) {
    if (selectedIssueIds && selectedIssueIds.indexOf(id) > -1) return true;
    else return false;
  }

  const issueList = issues.map((issue) => (
    <IssueTableCell
      key={issue.id}
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
