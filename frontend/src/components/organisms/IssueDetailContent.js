import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { issueState } from "../../_state";
import { useIssuesActions } from "../../_actions/issues.actions";

import { Sidebar } from "@components/molecules/Sidebars";
import { Comment } from "@components/molecules/Comment";
import {
  Button,
  SecondaryButton,
  SmallTextButton,
} from "@components/atoms/Buttons";
import { XSmallLink } from "@components/atoms/Link";
import TextArea from "@components/atoms/TextAreas";

import { ReactComponent as Plus } from "@assets/icons/plus.svg";
import { ReactComponent as XSquare } from "@assets/icons/xsquare.svg";
import { ReactComponent as Edit } from "@assets/icons/edit.svg";
import { ReactComponent as UserimageLarge } from "@assets/icons/userimageLarge.svg";
import { ReactComponent as Trash } from "@assets/icons/trash.svg";

const Container = styled.div`
  display: flex;

  margin: 0 80px;
`;

const LeftWrapper = styled.div`
  margin-right: 32px;
`;

const CommentWrapper = styled.div`
  margin: 16px 0px;
  display: flex;

  svg {
    margin-right: 16px;
  }
`;

const TextAreaWrapper = styled.div`
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 16px;

  svg {
    margin-right: 7px;
  }

  button + button {
    margin-left: 16px;
  }
`;

const DeleteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors.red};
  }
`;

export default function IssueDetailContent() {
  const issue = useRecoilValue(issueState);
  const issuesActions = useIssuesActions();

  const [selectedAssignee, setSelectedAssignee] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState([]);
  const [selectedMilestone, setSelectedMilestone] = useState([]);
  const [comment, setComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState("");
  const [editingCommentValue, setEditingCommentValue] = useState("");

  useEffect(() => {
    if (issue) {
      issue.assignees &&
        setSelectedAssignee(
          issue.assignees.map((assignee) => ({
            id: assignee.id,
            name: assignee.name,
          }))
        );
      issue.labels && setSelectedLabel(issue.labels);
      issue.milestone && setSelectedMilestone([issue.milestone]);
    }
  }, [issue]);

  function handleCreateComment() {
    const data = { content: comment };
    issuesActions.createComment(issue.id, data);
    setComment("");
  }

  function handleEditComment(commentId) {
    const data = { content: editingCommentValue };
    issuesActions.updateComment(issue.id, commentId, data);
    setEditingCommentValue("");
    setEditingCommentId(null);
  }

  function handleDeleteIssue() {
    issuesActions.deleteIssue(issue.id);
  }

  function CommentList() {
    return (
      issue &&
      issue.comments.map((comment) => {
        return (
          <CommentWrapper key={comment.id}>
            <UserimageLarge />
            {editingCommentId === comment.id ? (
              <TextAreaWrapper>
                <TextArea
                  placeholder='코멘트를 입력하세요'
                  initialValue={comment.content}
                  value={editingCommentValue}
                  setValue={setEditingCommentValue}
                  height='343'
                />
                <ButtonWrapper>
                  <SecondaryButton onClick={() => setEditingCommentId(null)}>
                    <XSquare />
                    <XSmallLink color='blue'>편집 취소</XSmallLink>
                  </SecondaryButton>
                  <Button
                    size='small'
                    color='blue'
                    onClick={() => handleEditComment(comment.id)}>
                    <Edit />
                    <XSmallLink color='offWhite'>편집 완료</XSmallLink>
                  </Button>
                </ButtonWrapper>
              </TextAreaWrapper>
            ) : (
              <Comment
                id={comment.id}
                username={comment.author}
                type={comment.status}
                content={comment.content}
                timestamp={comment.timestamp}
                setEditingCommentId={setEditingCommentId}
              />
            )}
          </CommentWrapper>
        );
      })
    );
  }

  return (
    <Container>
      <LeftWrapper>
        {CommentList()}
        <CommentWrapper>
          <UserimageLarge />
          <TextArea
            placeholder='코멘트를 입력하세요'
            value={comment}
            setValue={setComment}
            height='343'
          />
        </CommentWrapper>

        <ButtonWrapper>
          <Button size='small' color='blue' onClick={handleCreateComment}>
            <Plus />
            <XSmallLink color='offWhite'>코멘트 작성</XSmallLink>
          </Button>
        </ButtonWrapper>
      </LeftWrapper>
      <div>
        <Sidebar
          selectedAssignee={selectedAssignee}
          setSelectedAssignee={setSelectedAssignee}
          selectedLabel={selectedLabel}
          setSelectedLabel={setSelectedLabel}
          selectedMilestone={selectedMilestone}
          setSelectedMilestone={setSelectedMilestone}
        />
        <DeleteWrapper>
          <SmallTextButton onClick={() => handleDeleteIssue()}>
            <Trash />
            <XSmallLink color='red'>이슈 삭제</XSmallLink>
          </SmallTextButton>
        </DeleteWrapper>
      </div>
    </Container>
  );
}
