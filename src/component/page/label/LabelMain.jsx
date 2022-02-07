import { useState } from "react";
import { useQuery } from "react-query";
import styled, { css } from "styled-components";
import { getLabels, getMilestones } from "../../../api/api";
import { Button } from "../../atoms/Button";
import { cssFontSize, cssLink } from "../../atoms/Text";
import { LabelItem } from "../../molecules/LabelItem";
import { LabelNew } from "../../molecules/LabelNew";
import { Taps } from "../../molecules/Taps";

export const LabelMain = () => {
  // local state
  const [newLabelMode, setNewLabel] = useState(false);

  // server state
  const { data: labels, refetch: refetchLabelList } = useQuery("labels", getLabels);
  const { data: milestones } = useQuery("milestones", getMilestones);

  const numLabels = labels?.length || 0;
  const numMilestones = milestones?.length || 0;
  const labelItems = labels?.map((label) => <LabelItem key={label.id} label={label} refetchList={refetchLabelList} />);

  return (
    <>
      <Header>
        <Taps labelCount={numLabels} milestoneCount={numMilestones} />
        {newLabelMode ? (
          <StyledButton options={{ type: "Small-Secondary", prefixIcon: "x-square" }} onClick={() => setNewLabel(false)}>
            닫기
          </StyledButton>
        ) : (
          <StyledButton options={{ type: "Small-Standard", prefixIcon: "plus" }} onClick={() => setNewLabel(true)}>
            추가
          </StyledButton>
        )}
      </Header>
      {newLabelMode && <LabelNew refetchList={refetchLabelList} closeFn={() => setNewLabel(false)} />}
      <IssueTable>
        <IssueTableHeader>
          <span css={[cssFontSize["small"], cssLink]}>{`${numLabels}개의 레이블`}</span>
        </IssueTableHeader>
        {labelItems}
      </IssueTable>
    </>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
`;

const IssueTable = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.grayscale.line};
    border-radius: 16px;
    overflow: hidden;
    width: 100%;

    & > *:not(:last-child) {
      border-bottom: 1px solid ${theme.grayscale.line};
    }
  `
);

const IssueTableHeader = styled.div(
  ({ theme }) => css`
    background: ${theme.grayscale.background};
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    padding-left: 32px;
    color: ${theme.grayscale.label};
  `
);
