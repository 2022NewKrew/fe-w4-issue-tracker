import {
  useIssueFormStore,
  useIssueMutation,
  useIssueStore,
} from "@stores/issue";
import { useLabelFormStore } from "@stores/label";
import Atoms from "@UI/Atoms";
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
  <Atoms.Button
    className="RemoveButton"
    size="small"
    shape="text"
    icon="trash_red"
    text="삭제"
    onClick={onClick}
  />
);

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
          onClick={() =>
            modifyIssueStatus({
              issueId: issueFormMode,
              status: "close",
            })
          }
        />
      ) : (
        <Atoms.Button
          size="small"
          shape="secondary"
          icon="open"
          text="다시 열기"
          onClick={() =>
            modifyIssueStatus({
              issueId: issueFormMode,
              status: "open",
            })
          }
        />
      )}
    </Atoms.ButtonGroup>
  );
};
