import { useState } from "react";
import { useQuery } from "react-query";
import styled, { css } from "styled-components";
import { getLabels, getMilestones } from "../../../api/api";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";
import { SmallLabel } from "../../atoms/Label";
import { cssFontSize, cssLink } from "../../atoms/Text";
import { LabelItem } from "../../molecules/LabelItem";
import { Taps } from "../../molecules/Taps";

export const LabelMain = () => {
  // local state
  const [newLabelMode, setNewLabel] = useState(false);

  // server state
  const { data: labels, refetch: refetchLabelList } = useQuery("labels", getLabels);
  const { data: milestones } = useQuery("milestones", getMilestones);

  const deleteLabel = (labelId) => {};

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
      {newLabelMode && (
        <NewLabelWrapper>
          <LabelHeader>새로운 레이블 추가</LabelHeader>
          <LabelPreviewWrapper>
            <SmallLabel name="test" backgroundColor="blue" color="#FEFEFE" />
          </LabelPreviewWrapper>
          <LabelFormWrapper>
            <Input size="small" placeholder="레이블 이름" />
            <Input size="small" placeholder="설명(선택)" />
          </LabelFormWrapper>
          <NewLabelButton options={{ type: "Small-Standard", prefixIcon: "plus" }} onClick={() => setNewLabel(false)}>
            완료
          </NewLabelButton>
        </NewLabelWrapper>
      )}
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
    color: ${theme.grayscale.label};
  `
);

const NewLabelWrapper = styled.div(
  ({ theme }) => css`
    background: ${theme.grayscale.offWhite};
    padding: 32px;
    border: 1px solid ${theme.grayscale.line};
    border-radius: 16px;
    margin-bottom: 24px;

    display: grid;
    grid-template-columns: 312px auto;
    grid-template-areas:
      "header header"
      "preview form"
      ". button";
  `
);

const LabelHeader = styled.p`
  ${cssFontSize["large"]}
  grid-area: header;
`;

const LabelPreviewWrapper = styled.div`
  grid-area: preview;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LabelFormWrapper = styled.div`
  grid-area: form;
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;

  & > * {
    margin-bottom: 16px;
  }
`;

const NewLabelButton = styled(Button)`
  grid-area: button;
  margin-left: auto;
`;
