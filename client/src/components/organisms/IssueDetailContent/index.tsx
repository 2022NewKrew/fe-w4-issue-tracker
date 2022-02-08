import React from "react";
import styled from "styled-components";
import { SideBar } from "@/components/atoms";
import { IssueDetailCommentItem, IssueDetailCommentInput } from "@/components/molecules";
import { IStyle } from "@/constants/type";

interface IIssueDetailContentProps extends IStyle {}
const IssueDetailContent: React.FC<IIssueDetailContentProps> = () => {
  return (
    <IssueContentWrap>
      <IssueDetailContentWrap>
        <IssueDetailCommentItem />
        <IssueDetailCommentInput />
      </IssueDetailContentWrap>
      <SideBar />
    </IssueContentWrap>
  );
};

const IssueContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1280px;
`;
const IssueDetailContentWrap = styled.div`
  & > * {
    margin: 0px 0px 24px 0px;
  }
`;
export default IssueDetailContent;
