import React from "react";
import styled from "styled-components";

import {
  RegularDisplay,
  SmallSecondaryButton,
  SmallText,
  Wrapper,
} from "@atoms";
import { calculateTimeDiff } from "@utils";
import { IssueClosedLabel, IssueOpenedLabel } from "@molecules";

import { COLOR } from "@constants";

const IssueDetailHeaderWrapper = styled(Wrapper)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${COLOR.GREYSCALE.LINE};
  box-sizing: border-box;
`;

const IssueTag = styled(SmallText)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

const IssueIdDisplay = styled(RegularDisplay)`
  color: ${COLOR.GREYSCALE.LABEL};
`;

const IssueTitleWrapper = styled(Wrapper)`
  flex-direction: row;
  justify-content: flex-start;
`;

const IssuePropertyWrapper = styled(Wrapper)`
  margin: 20px 0;
  flex-direction: row;
`;

const LeftPart = styled(Wrapper)`
  align-items: flex-start;
`;

const RightPart = styled(Wrapper)`
  flex-direction: row;
  align-items: flex-start;
`;

function IssueDetailHeader({
  title,
  id,
  isOpened,
  timestamp,
  writer,
  comment,
}) {
  return (
    <IssueDetailHeaderWrapper>
      <LeftPart>
        <IssueTitleWrapper>
          <RegularDisplay
            css={`
              margin-right: 10px;
            `}
          >
            {title}
          </RegularDisplay>
          <IssueIdDisplay>#{id}</IssueIdDisplay>
        </IssueTitleWrapper>
        <IssuePropertyWrapper>
          {isOpened ? <IssueOpenedLabel /> : <IssueClosedLabel />}
          <IssueTag>
            이 이슈가 {calculateTimeDiff(timestamp)} 전, {writer.name} 님에 의해
            작성되었습니다
          </IssueTag>
          <IssueTag>코멘트 {comment.length}개</IssueTag>
        </IssuePropertyWrapper>
      </LeftPart>
      <RightPart>
        <SmallSecondaryButton
          css={`
            margin-right: 10px;
          `}
          color={COLOR.BLUE}
        >
          제목 편집
        </SmallSecondaryButton>
        <SmallSecondaryButton color={COLOR.BLUE}>
          이슈 닫기
        </SmallSecondaryButton>
      </RightPart>
    </IssueDetailHeaderWrapper>
  );
}

export default IssueDetailHeader;
