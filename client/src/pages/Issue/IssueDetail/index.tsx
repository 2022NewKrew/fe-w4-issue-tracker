import React from "react";
import styled from "styled-components";
import { IssueDetailContent, IssueDetailHeader } from "@/components/organisms";
import { DivLine } from "@/components/atoms";

const IssueDetail: React.FC = () => {
  return (
    <IssueWrap>
      <IssueDetailHeader />
      <DivLine />
      <IssueDetailContent />
    </IssueWrap>
  );
};

const IssueWrap = styled.div`
  width: 1280px;
  height: fit-content;
  margin-top: 32px;
`;

export default IssueDetail;
