import { useEffect, useReducer, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled, { css } from "styled-components";
import { deleteLabel, patchLabel } from "../../api/api";
import { randomHexColor } from "../../utils";
import { Button } from "../atoms/Button";
import { ColorCode } from "../atoms/ColorCode";
import { Input } from "../atoms/Input";
import { SmallLabel } from "../atoms/Label";
import { RadioOptionSelection } from "../atoms/RadioOptionSelection";
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

export const LabelItem = ({ label }) => {
  // server state
  const queryClient = useQueryClient();
  const editMutation = useMutation(patchLabel, {
    onSuccess: () => {
      queryClient.invalidateQueries("labels");
      setEditMode(false);
    },
  });
  const deleteMutation = useMutation(deleteLabel, {
    onSuccess: () => queryClient.invalidateQueries("labels"),
  });

  // local state
  const [editMode, setEditMode] = useState(false);
  const [editState, dispatch] = useReducer(editReducer, {});

  // 편집창 활성화
  const openEdit = () => {
    dispatch({ type: "INIT", label });
    setEditMode(true);
  };

  // 편집 완료 버튼 : name 이 없으면 비활성화
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (disabled && editState.name !== "") {
      setDisabled(false);
    } else if (!disabled && editState.name === "") {
      setDisabled(true);
    }
  }, [editState.name]);

  // 삭제 버튼
  const handleRemoveButton = () => {
    if (window.confirm(`${label.name} 을(를) 삭제하시겠습니까?`)) {
      deleteMutation.mutate({ id: label.id });
    }
  };

  if (editMode) {
    return (
      <NewLabelWrapper>
        <LabelHeader>레이블 편집</LabelHeader>
        <LabelPreviewWrapper>
          <SmallLabel name={editState.name !== "" ? editState.name : "레이블 이름"} backgroundColor={editState.backgroundColor} color={editState.color} />
        </LabelPreviewWrapper>
        <LabelFormWrapper>
          <Input size="small" placeholder="레이블 이름" value={editState.name} onChange={(e) => dispatch({ type: "CHANGE_NAME", name: e.target.value })} />
          <Input size="small" placeholder="설명(선택)" value={editState.description} onChange={(e) => dispatch({ type: "CHANGE_DESCRIPTION", description: e.target.value })} />
          <ColorCode
            label="배경 색상"
            handleRefresh={() => dispatch({ type: "CHANGE_BACKGROUNDCOLOR", backgroundColor: randomHexColor() })}
            value={editState.backgroundColor}
            onChange={(e) => dispatch({ type: "CHANGE_BACKGROUNDCOLOR", backgroundColor: e.target.value })}
          />
          <RadioOptionSelection
            label="글자 색깔"
            value={editState.color}
            options={[
              { label: "어두운색", value: "#14142B" },
              { label: "밝은색", value: "#FEFEFE" },
            ]}
            onChange={(e) => dispatch({ type: "CHANGE_COLOR", color: e.target.value })}
          />
        </LabelFormWrapper>
        <LabelButtonWrapper>
          <Button options={{ type: "Small-Secondary", prefixIcon: "x-square" }} onClick={() => setEditMode(false)}>
            취소
          </Button>
          <Button options={{ type: "Small-Standard", prefixIcon: "edit" }} onClick={() => editMutation.mutate({ id: label.id, editedLabel: editState })} disabled={disabled}>
            완료
          </Button>
        </LabelButtonWrapper>
      </NewLabelWrapper>
    );
  } else {
    return (
      <LabelItemWrapper key={label.id}>
        <LabelWapper>
          <SmallLabel {...label} />
        </LabelWapper>
        <Description>{label.description}</Description>
        <ButtonWrapper>
          <Button options={{ type: "Small-Text", prefixIcon: "edit" }} onClick={openEdit}>
            편집
          </Button>
          <RemoveButton options={{ type: "Small-Text", prefixIcon: "trash" }} onClick={handleRemoveButton}>
            삭제
          </RemoveButton>
        </ButtonWrapper>
      </LabelItemWrapper>
    );
  }
};

const LabelItemWrapper = styled.div(
  ({ theme }) => css`
    background: ${theme.grayscale.offWhite};
    width: 100%;

    display: grid;
    grid-template-columns: 240px auto 240px;
  `
);

const LabelWapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
`;

const Description = styled.span`
  ${cssFontSize["small"]}
  padding: 32px 0;
`;

const ButtonWrapper = styled.div`
  margin: 0 32px 0 auto;
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

const NewLabelWrapper = styled.div(
  ({ theme }) => css`
    background: ${theme.grayscale.offWhite};
    padding: 32px;

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

const LabelButtonWrapper = styled.div`
  grid-area: button;
  margin-left: auto;
  display: flex;
  align-items: center;

  & > * {
    margin-left: 8px;
  }
`;
