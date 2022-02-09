import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled, { css } from "styled-components";
import { deleteMilestone, patchMilestone } from "../../api/api";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icons";
import { ProgressIndicator } from "../atoms/ProgressIndicator";
import { cssFontSize, cssLink } from "../atoms/Text";
import { MilestoneEdit } from "./MilestoneEdit";

export const MilestoneItem = ({ milestone }) => {
  // server state
  const queryClient = useQueryClient();
  const onSuccess = () => queryClient.invalidateQueries("milestones");
  const patchMutation = useMutation(patchMilestone, {
    onSuccess: onSuccess,
  });
  const deleteMutation = useMutation(deleteMilestone, {
    onSuccess: onSuccess,
  });

  // local state
  const [editMode, setEditMode] = useState(false);
  const initState = {
    id: milestone.id,
    title: milestone.title,
    description: milestone.description,
    deadline: milestone.deadline,
  };

  // 상태 변경 버튼
  const handleStateButton = () => {
    if (milestone.status === "open") {
      if (window.confirm(`${milestone.title} 을(를) 닫으시겠습니까?`)) {
        patchMutation.mutate({ id: milestone.id, milestone: { status: "close" } });
      }
    } else {
      if (window.confirm(`${milestone.title} 을(를) 여시겠습니까?`)) {
        patchMutation.mutate({ id: milestone.id, milestone: { status: "open" } });
      }
    }
  };

  // 삭제 버튼
  const handleRemoveButton = () => {
    if (window.confirm(`${milestone.title} 을(를) 삭제하시겠습니까?`)) {
      deleteMutation.mutate({ id: milestone.id });
    }
  };

  const openIssueLength = milestone.issues.filter(({ status }) => status === "open").length;
  const closeIssueLength = milestone.issues.length - openIssueLength;

  if (editMode) {
    return <MilestoneEdit initState={initState} closeFn={() => setEditMode(false)} />;
  } else {
    return (
      <MilestoneItemWrapper>
        <InfoWrapper>
          <TitleWrapper>
            {milestone.status === "open" ? <OpenMilestoneIcon /> : <CloseMilestoneIcon />}
            <Title>{milestone.title}</Title>
            {milestone.deadline && <Icon name="calendar" />}
            {milestone.deadline}
          </TitleWrapper>
          <Description>{`${milestone.description}`}</Description>
        </InfoWrapper>
        <RightItemWrapper>
          <ButtonWrapper>
            {milestone.status === "open" ? (
              <Button options={{ type: "Small-Text", prefixIcon: "archive" }} onClick={handleStateButton}>
                닫기
              </Button>
            ) : (
              <Button options={{ type: "Small-Text", prefixIcon: "milestone" }} onClick={handleStateButton}>
                열기
              </Button>
            )}
            <Button options={{ type: "Small-Text", prefixIcon: "edit" }} onClick={() => setEditMode(true)}>
              편집
            </Button>
            <RemoveButton options={{ type: "Small-Text", prefixIcon: "trash" }} onClick={handleRemoveButton}>
              삭제
            </RemoveButton>
          </ButtonWrapper>
          <ProgressIndicator openIssueLength={openIssueLength} closeIssueLength={closeIssueLength} />
        </RightItemWrapper>
      </MilestoneItemWrapper>
    );
  }
};

const MilestoneItemWrapper = styled.div(
  ({ theme }) => css`
    background: ${theme.grayscale.offWhite};
    padding: 16px 32px;

    display: flex;
    align-items: center;
  `
);
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  ${cssFontSize["small"]}
  color: ${({ theme }) => theme.grayscale.label};

  & > * {
    margin-right: 8px;
  }
`;

const OpenMilestoneIcon = styled(Icon).attrs(() => ({
  name: "milestone",
}))`
  color: ${({ theme }) => theme.color.blue.default};
`;

const CloseMilestoneIcon = styled(Icon).attrs(() => ({
  name: "archive",
}))`
  color: ${({ theme }) => theme.grayscale.titleActive};
`;

const Title = styled.p`
  ${cssFontSize["medium"]}
  ${cssLink}
  color: ${({ theme }) => theme.grayscale.titleActive};
`;

const Description = styled.p`
  ${cssFontSize["small"]}
  color: ${({ theme }) => theme.grayscale.label};
  width: 800px;
`;

const RightItemWrapper = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  & > * {
    margin-left: 24px;
  }
`;

const RemoveButton = styled(Button)(
  ({ theme }) =>
    css`
      color: ${theme.color.error.default};
      &:hover,
      &:active {
        color: ${theme.color.error.dark};
      }
    `
);
