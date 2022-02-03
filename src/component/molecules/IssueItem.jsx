import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { CheckBox } from "../atoms/CheckBox";
import { Icon } from "../atoms/Icons";
import { SmallLabel } from "../atoms/Label";
import { cssFontSize, cssLink } from "../atoms/Text";

export const IssueItem = ({ item, handleCheckedList, checked, ...props }) => {
  return (
    <Issue {...props}>
      <IssueCheckBox onClick={() => handleCheckedList(item.issueId)} checked={checked} />
      <IssueTitle>
        <Icon name="alert-circle" />
        <Link to={`${item.issueId}`}>
          <span css={[cssFontSize["medium"], cssLink]}>{item.title}</span>
        </Link>
        {item.labels.map((props, index) => (
          <SmallLabel key={index} {...props} />
        ))}
      </IssueTitle>
      <IssueDescription>
        <span>{`#${item.issueId}`}</span>
        <span>{item.description}</span>
        {item.milestone && (
          <>
            <Icon name="milestone" />
            <p>{item.milestone}</p>
          </>
        )}
      </IssueDescription>
      <IssueRightItems></IssueRightItems>
    </Issue>
  );
};

const Issue = styled.div(
  ({ theme }) => css`
    background: ${theme.grayscale.offWhite};
    width: 100%;
    padding: 16px 0px;

    display: grid;
    grid-template-columns: 80px auto 100px;
    grid-template-areas:
      "checkbox    issueTitle    rightItems"
      "checkbox issueDescription rightItems";
  `
);

const IssueCheckBox = styled(CheckBox)`
  grid-area: checkbox;
  margin-top: 8px;
`;

const IssueTitle = styled.div`
  grid-area: issueTitle;
  display: flex;
  align-items: center;

  & > * {
    margin-right: 4px;
  }
`;

const IssueDescription = styled.div`
  grid-area: issueDescription;
  display: flex;
  align-items: center;

  ${cssFontSize["small"]}
  color: ${({ theme }) => theme.grayscale.label};

  & > * {
    margin-right: 4px;
  }
`;

const IssueRightItems = styled.div`
  grid-area: rightItems;
  display: flex;
  align-items: center;
  margin-left: auto;
`;
