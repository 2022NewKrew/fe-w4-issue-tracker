import { SideBar } from "@UI/Organisms";
import { TextArea, TextInput } from "@UI/Molecules";
import Atoms from "@UI/Atoms";
import Icon from "@UI/Icon";

import styled from "@emotion/styled";
import { useAddIssueStore } from "@stores/issue";
import { FormEvent, useCallback } from "react";

const IssueRegisterForm = () => {
  const {
    addIssue,
    issueForm,
    setTitle,
    setComment,
    setAssignees,
    setLabels,
    setMilestone,
  } = useAddIssueStore();

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      addIssue();
    },
    [addIssue]
  );

  return (
    <Wrapper className="IssueRegisterForm" onSubmit={onSubmit}>
      <Atoms.Title size="display">새로운 이슈 작성</Atoms.Title>
      <div className="formBody">
        <Icon name="user_image_large" />
        <div>
          <TextInput
            label="제목"
            size="medium"
            value={issueForm.title}
            onChange={setTitle}
          />
          <TextArea
            value={issueForm.comment}
            onChange={setComment}
            width={880}
            height={343}
          />
        </div>
        <SideBar
          assignees={issueForm.assignees}
          setAssignees={setAssignees}
          labels={issueForm.labels}
          setLabels={setLabels}
          milestone={issueForm.milestone}
          setMilestone={setMilestone}
        />
      </div>
      <Atoms.ButtonGroup direction="row" gap={32}>
        <Atoms.Button
          size="medium"
          shape="text"
          icon="x_square"
          link="/issue"
          text="작성 취소"
        />
        <Atoms.Button
          size="medium"
          type="submit"
          disabled={!(issueForm.title && issueForm.comment)}
          text="완료"
        />
      </Atoms.ButtonGroup>
    </Wrapper>
  );
};

export default IssueRegisterForm;

const Wrapper = styled.form`
  width: 1280px;
  .formBody {
    width: 100%;
    padding: 32px 0 32px 60px;
    position: relative;
    border: 1px solid var(--line);
    border-left: none;
    border-right: none;
    margin: 32px 0;
    display: flex;
    justify-content: space-between;
    & > svg {
      left: 0;
    }
    & > div > .TextInput {
      width: 880px;
      margin-bottom: 8px;
    }
  }
  & > .ButtonGroup {
    justify-content: flex-end;
  }
`;
