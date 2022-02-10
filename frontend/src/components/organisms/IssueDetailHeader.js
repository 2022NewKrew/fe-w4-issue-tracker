import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";

import { Display } from "@components/atoms/Display";
import { XSmallLink } from "@components/atoms/Link";
import { MediumText } from "@components/atoms/Text";
import { SecondaryButton, Button } from "@components/atoms/Buttons";
import { LargeLabel } from "@components/molecules/Labels";
import { SmallTextInput } from "@components/atoms/TextInputs";

import { ReactComponent as Edit } from "@assets/icons/edit.svg";
import { ReactComponent as Archive } from "@assets/icons/archive.svg";

import { useRecoilValue } from "recoil";
import { issueState } from "../../_state";
import { useIssuesActions } from "../../_actions/issues.actions";

const Container = styled.div`
  margin: 0 80px;
`;

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 112px;
`;

const DisplayWrapper = styled.div`
  display: flex;

  p + p {
    margin-left: 16px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-right: 100px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  svg {
    margin-right: 5.33px;
  }

  button + button {
    margin-left: 8px;
  }
`;

const BottomHeader = styled.div`
  display: flex;
  align-items: center;

  div + p,
  p + p {
    margin-left: 8px;
  }
`;

export default function IssueDetailHeader() {
  const issue = useRecoilValue(issueState);
  const issuesActions = useIssuesActions();

  const [editingTitle, setEditingTitle] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (issue) {
      setTitle(issue.title);
    }
  }, [issue]);

  function handleEditTitle() {
    const data = {
      title: title,
    };
    issuesActions.updateIssue(issue.id, data);
    setEditingTitle(false);
  }

  function showHeaderBasedOnEditingStatus() {
    if (editingTitle === false) {
      return (
        <TopHeader>
          <DisplayWrapper>
            <Display type='regular' color='titleActive'>
              {issue.title}
            </Display>
            <Display type='regular' color='label'>
              #{issue.num}
            </Display>
          </DisplayWrapper>

          <ButtonWrapper>
            <SecondaryButton onClick={() => setEditingTitle(!editingTitle)}>
              <Edit />
              <XSmallLink color='blue'>제목 편집</XSmallLink>
            </SecondaryButton>
            <SecondaryButton>
              <Archive />
              <XSmallLink color='blue'>이슈 닫기</XSmallLink>
            </SecondaryButton>
          </ButtonWrapper>
        </TopHeader>
      );
    } else {
      return (
        <TopHeader>
          <InputWrapper>
            <SmallTextInput text='제목' value={title} setValue={setTitle} />
          </InputWrapper>
          <ButtonWrapper>
            <SecondaryButton onClick={() => setEditingTitle(!editingTitle)}>
              <Edit />
              <XSmallLink color='blue'>편집 취소</XSmallLink>
            </SecondaryButton>
            <Button size='small' color='blue' onClick={() => handleEditTitle()}>
              <Archive />
              <XSmallLink color='white'>편집 완료</XSmallLink>
            </Button>
          </ButtonWrapper>
        </TopHeader>
      );
    }
  }
  return (
    issue && (
      <Container>
        {showHeaderBasedOnEditingStatus()}
        {/* <TopHeader>
          <DisplayWrapper>
            <Display type='regular' color='titleActive'>
              {issue.title}
            </Display>
            <Display type='regular' color='label'>
              #{issue.num}
            </Display>
          </DisplayWrapper>

          <ButtonWrapper>
            <SecondaryButton onClick={() => setEditingTitle(!editingTitle)}>
              <Edit />
              <XSmallLink color='blue'>제목 편집</XSmallLink>
            </SecondaryButton>
            <SecondaryButton>
              <Archive />
              <XSmallLink color='blue'>이슈 닫기</XSmallLink>
            </SecondaryButton>
          </ButtonWrapper>
        </TopHeader> */}
        <BottomHeader>
          {issue.status === "open" ? (
            <LargeLabel type='open'></LargeLabel>
          ) : (
            <LargeLabel type='closed'></LargeLabel>
          )}
          <MediumText color='body'>
            이 이슈가 {moment(issue.timestamp).fromNow()}에 {issue.writer.id}
            님에 의해 열렸습니다
          </MediumText>
          <MediumText color='body'>·</MediumText>
          <MediumText color='body'>코멘트 {issue.comments.length}개</MediumText>
        </BottomHeader>
      </Container>
    )
  );
}
