import styled from "styled-components";
import { Icon } from "../atoms/Icons";
import { cssFontSize, cssLink } from "../atoms/Text";
import UserImageLarge from "../../assets/UserImageLarge.png";
import { SmallLabel } from "../atoms/Label";
import { ProgressIndicatorBar } from "../atoms/ProgressIndicator";

export const Sidebar = ({ issue }) => {
  const { assignees, labels, milestone } = issue;

  const assigneeItems = assignees.map((assignee) => (
    <AssigneeWrapper key={assignee.id}>
      <img src={UserImageLarge} />
      <AssigneeName>{assignee.name}</AssigneeName>
    </AssigneeWrapper>
  ));
  const labelItems = labels.map((label) => (
    <LabelWrapper key={label.id}>
      <SmallLabel {...label} />
    </LabelWrapper>
  ));
  const milestoneItem = milestone ? (
    <MilestoneWrapper>
      <ProgressIndicatorBar milestone={milestone} />
      <MilestoneName>{milestone.title}</MilestoneName>
    </MilestoneWrapper>
  ) : undefined;

  return (
    <SidebarWrapper>
      <SidebarItemWrapper key="assignees">
        <AddButton>
          <ButtonLabel>담당자</ButtonLabel>
          <Icon name="plus" />
        </AddButton>
        {assigneeItems}
      </SidebarItemWrapper>
      <SidebarItemWrapper key="labels">
        <AddButton>
          <ButtonLabel>레이블</ButtonLabel>
          <Icon name="plus" />
        </AddButton>
        {labelItems}
      </SidebarItemWrapper>
      <SidebarItemWrapper key="milestone">
        <AddButton>
          <ButtonLabel>마일스톤</ButtonLabel>
          <Icon name="plus" />
        </AddButton>
        {milestoneItem}
      </SidebarItemWrapper>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  width: 308px;
  border: 1px solid ${({ theme }) => theme.grayscale.line};
  border-radius: 16px;
  overflow: hidden;

  & > *:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.grayscale.line};
  }
`;

const SidebarItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${({ theme }) => theme.grayscale.offWhite};
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.grayscale.label};
  &:active {
    color: ${({ theme }) => theme.grayscale.body};
  }
`;

const ButtonLabel = styled.label`
  margin-right: auto;
  ${cssFontSize["small"]}
  ${cssLink}
`;

const AssigneeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const AssigneeName = styled.p`
  margin-left: 4px;
  ${cssFontSize["small"]}
  color: ${({ theme }) => theme.grayscale.label};
`;

const LabelWrapper = styled.div`
  margin-top: 16px;
  display: flex;
`;

const MilestoneWrapper = styled.div`
  margin-top: 16px;
`;

const MilestoneName = styled.p`
  margin-top: 4px;
  ${cssFontSize["small"]}
  color: ${({ theme }) => theme.grayscale.label};
`;
