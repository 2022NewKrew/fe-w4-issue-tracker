import React from "react";
import styled from "styled-components";

import { ReactComponent as CheckboxInitial } from "@assets/icons/checkboxInitial.svg";
import { ReactComponent as CheckboxActive } from "@assets/icons/checkboxActive.svg";
import { ReactComponent as AlertCircle } from "@assets/icons/alertCircle.svg";
import { ReactComponent as Milestone } from "@assets/icons/milestone.svg";
import { ReactComponent as UserimageSmall } from "@assets/icons/userimageSmall.svg";
import { MediumLink } from "@components/atoms/link";
import { SmallLabel } from "@components/molecules/Labels";
import { SmallText } from "@components/atoms/Text";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: inherit;
  height: 80px;
  padding: 0 30px;

  background-color: ${(props) => props.theme.greyscale.offWhite};

  border: 1px solid ${(props) => props.theme.greyscale.line};
  border-top: none;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  svg:first-child {
    cursor: pointer;
  }
`;

const ContentWrapper = styled.div`
  padding-left: 33.33px;
`;

const IssueTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  svg + p {
    margin-left: 9.33px;
  }

  p + div {
    margin-left: 8px;
  }
`;

const IssueInfoWrapper = styled.div`
  display: flex;
  align-items: center;

  p:first-child {
    margin-left: ;
  }

  p + p {
    margin-left: 16px;
  }

  svg {
    margin-right: 8px;
  }
`;

export default function IssueTableCell(props) {
  const {
    assignees,
    comments,
    id,
    labels,
    num,
    status,
    timestamp,
    milestone,
    title,
    writer,
  } = props.info;
  console.log(props.info);
  const color = "#004DE3";
  const formattedDate = new Date(timestamp).toLocaleDateString();

  function handleCheckboxClick() {
    if (props.selectedIssueIds.includes(id)) {
      const tempIssues = props.selectedIssueIds.filter(($id) => $id !== id);
      props.setSelectedIssueIds(tempIssues);
    } else {
      props.setSelectedIssueIds([...props.selectedIssueIds, id]);
    }
  }

  function checkbox() {
    if (props.selected) {
      return <CheckboxActive onClick={() => handleCheckboxClick()} />;
    } else {
      return <CheckboxInitial onClick={() => handleCheckboxClick()} />;
    }
  }

  return (
    <Container>
      <Wrapper>
        {checkbox()}
        <ContentWrapper>
          <IssueTitleWrapper>
            <AlertCircle color='#007AFF' />
            <MediumLink>{title}</MediumLink>
            {labels.length >= 1 && (
              <SmallLabel
                type='light'
                color={color}
                text={labels[0].description}
              />
            )}
          </IssueTitleWrapper>
          <IssueInfoWrapper>
            <SmallText color='label'>#{num}</SmallText>
            <SmallText color='label'>
              이 이슈가 {formattedDate}에, {writer.name}님에 의해
              작성되었습니다.
            </SmallText>
            {milestone && (
              <SmallText color='label'>
                <Milestone />
                {milestone.title}
              </SmallText>
            )}
          </IssueInfoWrapper>
        </ContentWrapper>
      </Wrapper>

      <UserimageSmall />
    </Container>
  );
}
