import React from "react";
import styled from "styled-components";
import { DivLine } from "@/components/atoms";
import { IssueNewSubmit } from "@/components/molecules";
import { IssueNewContent } from "@/components/organisms";

const Issue: React.FC = () => {
  return (
    <IssueWrap>
      <IssueTitile>새로운 이슈 작성</IssueTitile>
      <DivLine />
      <IssueNewContent />
      <DivLine />
      <IssueNewSubmit />
    </IssueWrap>
  );
};

const IssueTitile = styled.div``;
const IssueWrap = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 32px;
  ${IssueTitile} {
    width: 221px;
    height: 48px;
    font-weight: normal;
    font-size: 32px;
    line-height: 48px;
    color: #14142b;
  }
`;

export default Issue;
