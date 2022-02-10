import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import { AlertCircleIcon, ArchieveIcon, MilestoneIcon } from "@icons";
import { MediumLinkText, SmallProfileImg, SmallText, Wrapper } from "@atoms";
import { IssueLabel } from "@molecules";

import { COLOR } from "@constants";
import { issueSelectionState } from "@stores";

import { calculateTimeDiff } from "@utils";
import { useNavigate } from "react-router-dom";

const IssueCellWrapper = styled(Wrapper)`
  flex-direction: row;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  border-top: 1px solid ${COLOR.GREYSCALE.LINE};
  &:hover {
    background-color: ${COLOR.GREYSCALE.BACKGROUND};
  }
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

const WriterProfile = styled(SmallProfileImg)`
  top: 40px;
  margin-right: 30px;
`;

const LeftPart = styled(Wrapper)`
  flex-direction: row;
`;

function IssueCell({
  isOpened,
  title,
  label: labelList,
  id,
  writer,
  timestamp,
  milestone,
}) {
  const [selectedIssueList, setSelectedIssueList] =
    useRecoilState(issueSelectionState);

  const navigate = useNavigate();
  const checkboxRef = useRef();

  useEffect(() => {
    checkboxRef.current.checked = selectedIssueList.includes(id);
  }, [selectedIssueList]);

  const changeCheckbox = (e) => {
    const { target } = e;
    setSelectedIssueList(
      target.checked
        ? (prev) => [...prev, id]
        : (prev) => prev.filter((selectedId) => selectedId !== id)
    );
  };

  const clickIssueCell = (e) => {
    const { target } = e;
    if (target.dataset.notNavigate) {
      return;
    }
    navigate(`./${id}`);
  };
  return (
    <IssueCellWrapper onClick={clickIssueCell}>
      <LeftPart>
        <input
          data-not-navigate="true"
          type="checkbox"
          ref={checkboxRef}
          onChange={changeCheckbox}
        />
        <IssueInfoWrapper>
          <IssueTitleWrapper>
            {isOpened ? <AlertCircleIcon /> : <ArchieveIcon />}
            <MediumLinkText
              css={`
                margin-left: 10px;
              `}
            >
              {title}
            </MediumLinkText>
            {labelList.map((label, idx) => (
              <IssueLabel
                key={`${title}-label${idx}`}
                {...label}
                css={`
                  margin-left: 10px;
                `}
              />
            ))}
          </IssueTitleWrapper>
          <IssueTagWrapper>
            <IssueTag>#{id}</IssueTag>
            <IssueTag>
              이 이슈가 {calculateTimeDiff(timestamp)} 전, {writer.name} 님에
              의해 작성되었습니다
            </IssueTag>
            {milestone && (
              <IssueTag>
                <MilestoneIcon
                  css={`
                    margin-right: 10px;
                  `}
                />
                {milestone.text}
              </IssueTag>
            )}
          </IssueTagWrapper>
        </IssueInfoWrapper>
      </LeftPart>
      <WriterProfile data-not-navigate="true" src={writer.photoUrl} />
    </IssueCellWrapper>
  );
}

export default IssueCell;
