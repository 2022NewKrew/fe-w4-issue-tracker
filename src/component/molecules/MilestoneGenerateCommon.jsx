import styled, { css } from "styled-components";
import { Input } from "../atoms/Input";
import { cssFontSize } from "../atoms/Text";

const EditMilestoneWrapper = styled.div(
  ({ theme }) => css`
    background: ${theme.grayscale.offWhite};
    padding: 32px;

    display: flex;
    flex-direction: column;
  `
);

const NewMilestoneWrapper = styled(EditMilestoneWrapper)`
  border: 1px solid ${({ theme }) => theme.grayscale.line};
  border-radius: 16px;
  margin-bottom: 24px;
`;

const NewMilestoneHeader = styled.p`
  ${cssFontSize["large"]}
`;

const NewMilestoneForm = ({ label, dispatch }) => (
  <MilestoneFormWrapper>
    <Input size="small" placeholder="제목" value={label.title} onChange={(e) => dispatch({ type: "CHANGE_TITLE", title: e.target.value })} />
    <Input size="small" placeholder="완료일(선택)" value={label.deadline} onChange={(e) => dispatch({ type: "CHANGE_DEADLINE", deadline: e.target.value })} />
    <Input size="small" placeholder="설명(선택)" value={label.description} onChange={(e) => dispatch({ type: "CHANGE_DESCRIPTION", description: e.target.value })} />
  </MilestoneFormWrapper>
);

const MilestoneFormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;

  & > * {
    margin-bottom: 16px;
  }
`;

const MilestoneButtonWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  & > * {
    margin-left: 8px;
  }
`;

export { EditMilestoneWrapper, NewMilestoneWrapper, NewMilestoneHeader, NewMilestoneForm, MilestoneButtonWrapper };
