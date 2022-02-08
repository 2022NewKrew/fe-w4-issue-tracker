import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getLabels, getMilestones } from "../../../api/api";
import { Button } from "../../atoms/Button";
import { cssFontSize, cssLink } from "../../atoms/Text";
import { PageHeader, TableHeader, TableWrapper } from "../../commonLayout";
import { Taps } from "../../molecules/Taps";

export const MilestoneMain = () => {
  // local state
  const [newMode, setNewMode] = useState(false);

  // server state
  const { data: labels } = useQuery("labels", getLabels, { staleTime: 5000 });
  const { data: milestones } = useQuery("milestones", getMilestones, { staleTime: 5000 });

  const numLabels = labels?.length || 0;
  const numMilestones = milestones?.length || 0;
  const milestoneItems = milestones?.map((milestone) => <div>{milestone.title}</div>);

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
      <TableWrapper>
        <TableHeader>
          <span css={[cssFontSize["small"], cssLink]}>{`${numMilestones}개의 마일스톤`}</span>
        </TableHeader>
        {milestoneItems}
      </TableWrapper>
    </>
  );
};

const StyledButton = styled(Button)`
  margin-left: auto;
`;
