import React from "react";
import styled from "styled-components";
import Header from "@components/organisms/Header";
import { Display } from "@components/atoms/display";
import CreateIssueTemplate from "@components/templates/CreateIssueTemplate";

export default function CreateIssue() {
  const Container = styled.div`
    .title {
      margin-left: 80px;
    }
  `;

  return (
    <Container>
      <Header />
      <Display className='title'>새로운 이슈 작성</Display>
      <CreateIssueTemplate />
    </Container>
  );
}
