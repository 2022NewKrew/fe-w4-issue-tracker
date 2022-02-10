import styled from "@emotion/styled";
import {
  useIssueFormStore,
  useIssueMutation,
  useIssueStore,
} from "@stores/issue";
import { useLabelFormStore } from "@stores/label";
import { IssueStatus } from "@types";
import Atoms from "@UI/Atoms";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const EditButton = ({ onClick }: { onClick?: any }) => (
  <Atoms.Button
    className="EditButton"
    size="small"
    shape="text"
    icon="edit"
    text="편집"
    onClick={onClick}
  />
);

export const RemoveButton = ({ onClick }: { onClick?: any }) => (
  <SRemoveButton
    className="RemoveButton"
    size="small"
    shape="text"
    icon="trash_red"
    text="삭제"
    onClick={onClick}
  />
);

const SRemoveButton = styled(Atoms.Button)`
  color: #ff3b30;
`;

export const LabelAddButton = () => {
  const { labelFormMode, setLabelFormMode, resetLabelForm } =
    useLabelFormStore();

  return labelFormMode !== "add" ? (
    <Atoms.Button
      className="LabelAddButton"
      size="small"
      text="추가"
      icon="plus_white"
      onClick={() => {
        resetLabelForm();
        setLabelFormMode("add");
      }}
    />
  ) : (
    <Atoms.Button
      className="LabelAddButton"
      shape="secondary"
      size="small"
      icon="x_square"
      text="닫기"
      onClick={() => setLabelFormMode("close")}
    />
  );
};

interface FormButtonProps {
  formMode: "add" | string;
  onCancel: () => void;
  disabled: boolean;
}

export const FormButton = ({
  onCancel,
  formMode,
  disabled,
}: FormButtonProps) => {
  return formMode === "add" ? (
    <Atoms.Button
      className="FormButton"
      size="small"
      icon="plus_white"
      text="완료"
      type="submit"
      disabled={disabled}
    />
  ) : (
    <Atoms.ButtonGroup gap={8}>
      <Atoms.Button
        className="FormButton"
        shape="secondary"
        size="small"
        icon="x_square"
        text="취소"
        onClick={onCancel}
      />
      <Atoms.Button
        className="FormButton"
        size="small"
        icon="edit"
        text="완료"
        type="submit"
      />
    </Atoms.ButtonGroup>
  );
};

export const AddIssueButton = () => {
  const nav = useNavigate();
  const { resetIssueForm } = useIssueFormStore();

  return (
    <Atoms.Button
      size="small"
      icon="plus_white"
      text="이슈 작성"
      onClick={() => {
        resetIssueForm();
        nav("add");
      }}
    />
  );
};

export const IssueFormButton = () => {
  const { issueForm, resetIssueForm } = useIssueFormStore();
  const nav = useNavigate();

  return (
    <Atoms.ButtonGroup gap={32}>
      <Atoms.Button
        size="medium"
        shape="text"
        icon="x_square"
        text="작성 취소"
        onClick={() => {
          resetIssueForm();
          nav("/issue");
        }}
      />
      <Atoms.Button
        size="medium"
        type="submit"
        disabled={!(issueForm.title && issueForm.comment)}
        text="완료"
      />
    </Atoms.ButtonGroup>
  );
};

export const IssueDetailButton = () => {
  const { issueFormMode, issueTitleModify, setIssueTitleModify, setIssueForm } =
    useIssueFormStore();
  const { issueList } = useIssueStore();
  const { modifyIssueStatus, modifyIssueTitle } = useIssueMutation();

  const cancelEdit = () => {
    const prevTitle = issueList.find(({ id }) => id === issueFormMode)
      ?.title as string;
    setIssueForm((prev) => ({ ...prev, title: prevTitle }));
    setIssueTitleModify(false);
  };

  const changeIssue = useCallback((status: IssueStatus) => {
    modifyIssueStatus({
      issueId: issueFormMode,
      status,
    });
  }, []);

  return issueTitleModify ? (
    <Atoms.ButtonGroup gap={8}>
      <Atoms.Button
        size="small"
        shape="secondary"
        icon="x_square"
        text="편집 취소"
        onClick={cancelEdit}
      />
      <Atoms.Button
        size="small"
        icon="edit"
        text="편집 완료"
        onClick={() => {
          modifyIssueTitle();
          setIssueTitleModify(false);
        }}
      />
    </Atoms.ButtonGroup>
  ) : (
    <Atoms.ButtonGroup gap={8}>
      <Atoms.Button
        size="small"
        shape="secondary"
        icon="edit"
        text="제목 편집"
        onClick={() => setIssueTitleModify(true)}
      />
      {issueList.find(({ id }) => id === issueFormMode)?.status === "open" ? (
        <Atoms.Button
          size="small"
          shape="secondary"
          icon="close"
          text="이슈 닫기"
          onClick={() => changeIssue("close")}
        />
      ) : (
        <Atoms.Button
          size="small"
          shape="secondary"
          icon="open"
          text="다시 열기"
          onClick={() => changeIssue("open")}
        />
      )}
    </Atoms.ButtonGroup>
  );
};

export const IssueTableIssueStatusButton = () => {
  const { issueListCount, filter, setFilter } = useIssueStore();

  const onClick = ({ target }: MouseEvent) => {
    const btn = (target as HTMLElement).closest("button");
    if (!btn || !btn.dataset.status) return;
    const status = btn.dataset.status as IssueStatus;
    setFilter((prev) => ({ ...prev, status }));
  };

  return (
    <Atoms.ButtonGroup gap={24}>
      <Atoms.Button
        size="medium"
        shape="text"
        icon="open"
        data-status="open"
        onClick={onClick}
        active={filter.status === "open"}
        text={`열린 이슈(${issueListCount.openCount})`}
      />
      <Atoms.Button
        size="medium"
        shape="text"
        icon="close"
        data-status="close"
        onClick={onClick}
        active={filter.status === "close"}
        text={`닫힌 이슈(${issueListCount.closeCount})`}
      />
    </Atoms.ButtonGroup>
  );
};

interface IndicatorButtonProps {
  text: string;
  onClick: any;
}

export const IndicatorButton = ({ onClick, text }: IndicatorButtonProps) => {
  return (
    <Atoms.Button
      shape="text"
      size="medium"
      onClick={onClick}
      icon="arrow_down"
      text={text}
    />
  );
};

export const GithubLoginButton = () => {
  return <SGithubLoginButton size="large" text="GitHub 계정으로 로그인" />;
};

const SGithubLoginButton = styled(Atoms.Button)`
  background: #14142b;
  :hover:enabled:not(:active),
  :active {
    background: #14142b;
    border: none;
  }
`;

export const IDLoginButton = ({ disabled }: { disabled: boolean }) => (
  <Atoms.Button
    size="large"
    disabled={disabled}
    text="아이디로 로그인"
    type="submit"
  />
);

export const SignupButton = () => (
  <Atoms.Button size="small" shape="text" link="/issue" text="회원가입" />
);

export const FileAttachButton = () => (
  <Atoms.Button
    shape="text"
    icon="paperclip"
    size="small"
    text="파일 첨부하기"
  />
);

export const SearchButton = () => (
  <Atoms.Button size="small" shape="text" icon="search" type="submit" />
);
