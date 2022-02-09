import React from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";

import { Display } from "@components/atoms/Display";
import { XSmallLink } from "@components/atoms/Link";
import { MediumText } from "@components/atoms/Text";
import { SecondaryButton } from "@components/atoms/Buttons";
import { LargeLabel } from "@components/molecules/Labels";

import { ReactComponent as Edit } from "@assets/icons/edit.svg";
import { ReactComponent as Archive } from "@assets/icons/archive.svg";

import { useRecoilValue } from "recoil";
import { issueState } from "../../_state";

const Container = styled.div`
  margin: 0 80px;
`;

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DisplayWrapper = styled.div`
  display: flex;

  p + p {
    margin-left: 16px;
  }
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
  return (
    issue && (
      <Container>
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
            <SecondaryButton>
              <Edit />
              <XSmallLink color='blue'>제목 편집</XSmallLink>
            </SecondaryButton>
            <SecondaryButton>
              <Archive />
              <XSmallLink color='blue'>이슈 닫기</XSmallLink>
            </SecondaryButton>
          </ButtonWrapper>
        </TopHeader>
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
