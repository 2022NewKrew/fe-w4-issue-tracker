import { useState } from "react";
import { useQuery } from "react-query";
import styled, { css } from "styled-components";
import { getLabels, getMilestones } from "../../../api/api";
import { Button } from "../../atoms/Button";
import { cssFontSize, cssLink } from "../../atoms/Text";
import { PageHeader, TableHeader, TableWrapper } from "../../commonLayout";
import { LabelItem } from "../../molecules/LabelItem";
import { LabelNew } from "../../molecules/LabelNew";
import { Taps } from "../../molecules/Taps";

export const LabelMain = () => {
  // local state
  const [newMode, setNewMode] = useState(false);

  // server state
  const { data: labels } = useQuery("labels", getLabels, { staleTime: 5000 });
  const { data: milestones } = useQuery("milestones", getMilestones, { staleTime: 5000 });

  const numLabels = labels?.length || 0;
  const numMilestones = milestones?.length || 0;
  const labelItems = labels?.map((label) => <LabelItem key={label.id} label={label} />);

  return (
    <>
      <PageHeader>
        <Taps labelCount={numLabels} milestoneCount={numMilestones} />
        {newMode ? (
          <StyledButton options={{ type: "Small-Secondary", prefixIcon: "x-square" }} onClick={() => setNewMode(false)}>
            닫기
          </StyledButton>
        ) : (
          <StyledButton options={{ type: "Small-Standard", prefixIcon: "plus" }} onClick={() => setNewMode(true)}>
            추가
          </StyledButton>
        )}
      </PageHeader>
      {newMode && <LabelNew closeFn={() => setNewMode(false)} />}
      <TableWrapper>
        <TableHeader>
          <span css={[cssFontSize["small"], cssLink]}>{`${numLabels}개의 레이블`}</span>
        </TableHeader>
        {labelItems}
      </TableWrapper>
    </>
  );
};

const StyledButton = styled(Button)`
  margin-left: auto;
`;
