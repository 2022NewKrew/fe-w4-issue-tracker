import { useEffect, useReducer, useState } from "react";
import { useMutation } from "react-query";
import styled, { css } from "styled-components";
import { patchLabel } from "../../api/api";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { SmallLabel } from "../atoms/Label";
import { cssFontSize } from "../atoms/Text";

const editReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return {
        ...state,
        name: action.label.name,
        description: action.label.description,
        backgroundColor: action.label.backgroundColor,
        color: action.label.color,
      };
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "CHANGE_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    case "CHANGE_BACKGROUNDCOLOR":
      return {
        ...state,
        backgroundColor: action.backgroundColor,
      };
    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
};

export const LabelItem = ({ label, refetchList }) => {
  // local state
  const [editMode, setEdit] = useState(false);
  const [editState, dispatch] = useReducer(editReducer, {});

  // patch
  const { mutate: editLabel, isSuccess } = useMutation(patchLabel);
  useEffect(() => {
    console.log(isSuccess);
    if (isSuccess) {
      setEdit(false);
      refetchList();
    }
  }, [isSuccess]);

  // 편집창 오픈
  const openEdit = () => {
    dispatch({ type: "INIT", label });
    setEdit(true);
  };

  const handleNameChange = (event) => {
    dispatch({ type: "CHANGE_NAME", name: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    dispatch({ type: "CHANGE_DESCRIPTION", description: event.target.value });
  };

  const deleteLabel = () => {};

  if (editMode) {
    return (
      <LabelEdit>
        <p css={cssFontSize["large"]}>레이블 편집</p>
        <Input size="small" placeholder="레이블 이름" value={editState.name} onChange={handleNameChange} />
        <Input size="small" placeholder="설명(선택)" value={editState.description} onChange={handleDescriptionChange} />
        <Button options={{ type: "Small-Secondary", prefixIcon: "x-square" }} onClick={() => setEdit(false)}>
          취소
        </Button>
        <Button options={{ type: "Small-Standard", prefixIcon: "edit" }} onClick={() => editLabel({ id: label.id, editedLabel: editState })}>
          완료
        </Button>
      </LabelEdit>
    );
  } else {
    return (
      <LabelItemWrapper key={label.id}>
        <SmallLabel {...label} />
        <span css={[cssFontSize["small"]]}>{label.description}</span>
        <Button options={{ type: "Small-Text", prefixIcon: "edit" }} onClick={openEdit}>
          편집
        </Button>
        <Button options={{ type: "Small-Text", prefixIcon: "trash" }} onClick={deleteLabel}>
          삭제
        </Button>
      </LabelItemWrapper>
    );
  }
};

const LabelItemWrapper = styled.div(
  ({ theme }) => css`
    background: ${theme.grayscale.offWhite};
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
  `
);

const LabelEdit = styled.div(
  ({ theme }) => css`
    background: ${theme.grayscale.offWhite};
    display: flex;
    align-items: center;
    padding: 32px;
  `
);
