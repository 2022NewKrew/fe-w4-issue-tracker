import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { issueState } from "../../_state";

import { Sidebar } from "@components/molecules/Sidebars";
import { Comment } from "@components/molecules/Comment";
import { Button } from "@components/atoms/Buttons";
import { XSmallLink } from "@components/atoms/Link";
import TextArea from "@components/atoms/TextAreas";

import { ReactComponent as Plus } from "@assets/icons/plus.svg";
import { ReactComponent as UserimageLarge } from "@assets/icons/userimageLarge.svg";

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

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 16px;

  svg {
    margin-right: 7.33px;
  }
`;

export default function IssueDetailContent() {
  const issue = useRecoilValue(issueState);

  const [selectedAssignee, setSelectedAssignee] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState([]);
  const [selectedMilestone, setSelectedMilestone] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    if (issue) {
      issue.assignees && setSelectedAssignee(issue.assignees);
      issue.labels && setSelectedLabel(issue.labels);
      issue.milestone && setSelectedMilestone([issue.milestone]);
    }
  }, [issue]);

  function CommentList() {
    return (
      issue &&
      issue.comments.map((comment) => {
        return (
          <CommentWrapper key={comment.id}>
            <UserimageLarge />
            <Comment
              className='comment'
              username={comment.author}
              type={comment.status}
              content={comment.content}
              timestamp={comment.timestamp}
            />
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
            className='yayy'
            placeholder='코멘트를 입력하세요'
            value={comment}
            setValue={setComment}
            height='343'
          />
        </CommentWrapper>

        <ButtonWrapper>
          <Button size='small' color='blue'>
            <Plus />
            <XSmallLink color='offWhite'>코멘트 작성</XSmallLink>
          </Button>
        </ButtonWrapper>
      </LeftWrapper>

      <Sidebar
        selectedAssignee={selectedAssignee}
        setSelectedAssignee={setSelectedAssignee}
        selectedLabel={selectedLabel}
        setSelectedLabel={setSelectedLabel}
        selectedMilestone={selectedMilestone}
        setSelectedMilestone={setSelectedMilestone}
      />
    </Container>
  );
}
