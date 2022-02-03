import React from "react";
import styled from "styled-components";

import IssueTableHeader from "@components/organisms/IssueTableHeader";
import IssueTableCell from "../organisms/IssueTableCell";

const Container = styled.div`
  margin: 0 80px;

  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.greyscale.line};

  overflow: hidden;
`;

export default function IssueTableContainer() {
  const info = {
    id: 1,
    title: "FE 이슈트래커 개발",
    label: "documentation",
    author: "Lin",
    milestone: "마스터즈 코스",
    date: "2022년 1월 27일",
  };
  return (
    <Container>
      <IssueTableHeader />
      <IssueTableCell info={info} />
    </Container>
  );
}
