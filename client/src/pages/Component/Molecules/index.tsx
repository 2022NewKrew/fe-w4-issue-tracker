import {
  CommentTextArea,
  Panel,
  IssueListTitle,
  IssueListItem,
  IssueNewSubmit,
  IssueDetailCommentItem,
  IssueDetailCommentInput,
  IssueFilterOption,
} from "@/components/molecules";
import { DivLine } from "@/components/atoms";
import React from "react";
import styled from "styled-components";

const Molecules: React.FC = () => {
  return (
    <MoleculeWrap>
      <CommentTextArea name="코멘트를 입력하세요"></CommentTextArea>
      <DivLine />
      <Panel type="modify" optionList={["Filter", "Two", "Three"]} />
      <DivLine />
      <Panel type="text" optionList={["Filter", "Two", "Three"]} />
      <DivLine />
      <Panel type="imageText" optionList={["Filter", "Two", "Three"]} />
      <DivLine />
      <IssueListTitle />
      <DivLine />
      <IssueListItem />
      <DivLine />
      <IssueNewSubmit />
      <DivLine />
      <IssueDetailCommentItem />
      <DivLine />
      <IssueDetailCommentInput />
      <DivLine />
      <IssueFilterOption />
    </MoleculeWrap>
  );
};
const MoleculeWrap = styled.div`
  width: 1440px;
  padding-left: 80px;
  padding-right: 80px;
`;
export default Molecules;
