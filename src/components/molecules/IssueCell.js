import React from "react";
import styled, { css } from "styled-components";
import { MediumLinkText, SmallText, Wrapper, XSmallText } from "@atoms";
import { COLOR } from "@constants";
import { AlertCircleIcon, MilestoneIcon } from "@icons";
import { authService } from "@/firebase.js";

const LABEL_TYPE = {
  DOCUMENTATION: "documentation",
  LIGHT_TEXT: "lightText",
};

const IssueCellWrapper = styled(Wrapper)`
  flex-direction: row;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
`;

const IssueInfoWrapper = styled(Wrapper)`
  align-items: baseline;
  margin-left: 10px;
`;

const IssueTitleWrapper = styled(Wrapper)`
  flex-direction: row;
  margin: 0 0 5px 10px;
  height: 32px;
`;

const IssueTagWrapper = styled(Wrapper)`
  flex-direction: row;
  height: 32px;
`;

const IssueTag = styled(SmallText)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

const IssueLabel = styled(XSmallText)`
  border-radius: 30px;
  padding: 4px 16px;
  margin-left: 10px;
  ${({ type }) => {
    const { BLUE, GREYSCALE } = COLOR;
    switch (type) {
      case LABEL_TYPE.DOCUMENTATION:
        return css`
          background-color: ${BLUE.DARK_BLUE};
          color: ${GREYSCALE.OFF_WHITE};
        `;
      default:
        return css`
          background-color: ${GREYSCALE.BODY};
          color: ${GREYSCALE.OFF_WHITE};
        `;
    }
  }}
`;

const WriterProfile = styled.img`
  width: 20px;
  height: 20px;
  top: 40px;
  border-radius: 10px;
`;

const LeftPart = styled(Wrapper)`
  flex-direction: row;
`;

function IssueCell({ title, labelList, id, writer, timestamp, milestone }) {
  //FIX: DB 연동시 writer profile img url 수정
  const auth = authService.getAuth();
  const url = auth.currentUser.photoURL;
  return (
    <IssueCellWrapper>
      <LeftPart>
        <input type="checkbox" />
        <IssueInfoWrapper>
          <IssueTitleWrapper>
            <AlertCircleIcon />
            <MediumLinkText
              css={`
                margin-left: 10px;
              `}
            >
              {title}
            </MediumLinkText>
            {labelList.map((label, idx) => {
              return (
                <IssueLabel key={`${title}-label${idx}`} type={label}>
                  {label}
                </IssueLabel>
              );
            })}
          </IssueTitleWrapper>
          <IssueTagWrapper>
            <IssueTag>#{id}</IssueTag>
            <IssueTag>
              이 이슈가 {timestamp}분 전, {writer}님에 의해 작성되었습니다
            </IssueTag>
            <IssueTag>
              <MilestoneIcon
                css={`
                  margin-right: 10px;
                `}
              />
              {milestone}
            </IssueTag>
          </IssueTagWrapper>
        </IssueInfoWrapper>
      </LeftPart>
      <WriterProfile
        src={url}
        css={`
          margin-right: 30px;
        `}
      />
    </IssueCellWrapper>
  );
}

export default IssueCell;
