import { useEffect, useReducer, useState } from "react";
import { useMutation } from "react-query";
import styled, { css } from "styled-components";
import { createNewLabel } from "../../api/api";
import { randomHexColor } from "../../utils";
import { Button } from "../atoms/Button";
import { ColorCode } from "../atoms/ColorCode";
import { Input } from "../atoms/Input";
import { SmallLabel } from "../atoms/Label";
import { cssFontSize } from "../atoms/Text";

const reducer = (state, action) => {
  switch (action.type) {
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

export const LabelNew = ({ refetchList, closeFn }) => {
  const newMutation = useMutation(createNewLabel);
  const [newLabel, dispatch] = useReducer(reducer, {
    name: "",
    description: "",
    backgroundColor: randomHexColor(),
    color: "#FEFEFE",
  });

  // name 이 없으면 버튼 disabled
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (disabled && newLabel.name !== "") {
      setDisabled(false);
    } else if (!disabled && newLabel.name === "") {
      setDisabled(true);
    }
  }, [newLabel.name]);

  useEffect(() => {
    if (newMutation.isSuccess) {
      window.alert("추가되었습니다!");
      closeFn();
      refetchList();
    }
  }, [newMutation.isSuccess]);

  return (
    <NewLabelWrapper>
      <LabelHeader>새로운 레이블 추가</LabelHeader>
      <LabelPreviewWrapper>
        <SmallLabel name={newLabel.name !== "" ? newLabel.name : "레이블 이름"} backgroundColor={newLabel.backgroundColor} color={newLabel.color} />
      </LabelPreviewWrapper>
      <LabelFormWrapper>
        <Input size="small" placeholder="레이블 이름" value={newLabel.name} onChange={(e) => dispatch({ type: "CHANGE_NAME", name: e.target.value })} />
        <Input size="small" placeholder="설명(선택)" value={newLabel.description} onChange={(e) => dispatch({ type: "CHANGE_DESCRIPTION", description: e.target.value })} />
        <ColorCode
          label="배경 색상"
          handleRefresh={() => dispatch({ type: "CHANGE_BACKGROUNDCOLOR", backgroundColor: randomHexColor() })}
          value={newLabel.backgroundColor}
          onChange={(e) => dispatch({ type: "CHANGE_BACKGROUNDCOLOR", backgroundColor: e.target.value })}
        />
      </LabelFormWrapper>
      <LabelButtonWrapper>
        <Button options={{ type: "Small-Standard", prefixIcon: "plus" }} onClick={() => newMutation.mutate({ newLabel })} disabled={disabled}>
          완료
        </Button>
      </LabelButtonWrapper>
    </NewLabelWrapper>
  );
};

const NewLabelWrapper = styled.div(
  ({ theme }) => css`
    background: ${theme.grayscale.offWhite};
    padding: 32px;
    border: 1px solid ${theme.grayscale.line};
    border-radius: 16px;
    margin-bottom: 24px;

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
