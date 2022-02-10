import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { TrashIcon } from "@icons";
import { Wrapper, XSmallLinkText } from "@atoms";
import { CommentInput, IssueComment } from "@molecules";
import { IssueSidebar } from "@organisms";

import { findObjectWithIdFromList } from "@utils";
import { userListState } from "@stores";

import { deleteIssue, getAuth } from "@/firebase.js";

const IssueDetailContentWrapper = styled(Wrapper)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const CommentList = styled(Wrapper)`
  width: 100%;
  box-sizing: border-box;
`;

const DeleteIssueButtonWrapper = styled(Wrapper)`
  flex-direction: row;
`;

const DeleteIssueButtonText = styled(XSmallLinkText)`
  color: red;
`;

const RightPart = styled(Wrapper)`
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 40px;
`;

const LeftPart = styled(Wrapper)`
  width: 100%;
`;

const NewCommentInput = styled(CommentInput)`
  width: 100%;
`;

function IssueDetailContent({ id, comment }) {
  const userList = useRecoilValue(userListState);
  const navigate = useNavigate();
  const [optionValues, setOptionValues] = useState({});

  const auth = getAuth();

  const clickDeleteButton = async () => {
    await deleteIssue({ id });
    navigate("/issueList");
  };

  return (
    <IssueDetailContentWrapper>
      <LeftPart>
        <CommentList>
          {comment.map((commentData, idx) => (
            <IssueComment
              {...commentData}
              {...findObjectWithIdFromList(commentData.writer, userList)}
              key={`${id}-comment-${idx}`}
            />
          ))}
        </CommentList>
        <NewCommentInput photoUrl={auth.currentUser.photoURL} />
      </LeftPart>

      <RightPart>
        <IssueSidebar setOptionValues={setOptionValues} />
        <DeleteIssueButtonWrapper onClick={clickDeleteButton}>
          <TrashIcon />
          <DeleteIssueButtonText>이슈 삭제</DeleteIssueButtonText>
        </DeleteIssueButtonWrapper>
      </RightPart>
    </IssueDetailContentWrapper>
  );
}

export default IssueDetailContent;
