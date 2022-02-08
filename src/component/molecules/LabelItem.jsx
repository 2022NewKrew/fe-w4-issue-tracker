import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled, { css } from "styled-components";
import { deleteLabel } from "../../api/api";
import { Button } from "../atoms/Button";
import { SmallLabel } from "../atoms/Label";
import { cssFontSize } from "../atoms/Text";
import { LabelEdit } from "./LabelEdit";

export const LabelItem = ({ label }) => {
  // server state
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deleteLabel, {
    onSuccess: () => queryClient.invalidateQueries("labels"),
  });

  // local state
  const [editMode, setEditMode] = useState(false);

  // 삭제 버튼
  const handleRemoveButton = () => {
    if (window.confirm(`${label.name} 을(를) 삭제하시겠습니까?`)) {
      deleteMutation.mutate({ id: label.id });
    }
  };

  if (editMode) {
    return <LabelEdit initState={label} closeFn={() => setEditMode(false)} />;
  } else {
    return (
      <LabelItemWrapper key={label.id}>
        <LabelWapper>
          <SmallLabel {...label} />
        </LabelWapper>
        <Description>{label.description}</Description>
        <ButtonWrapper>
          <Button options={{ type: "Small-Text", prefixIcon: "edit" }} onClick={() => setEditMode(true)}>
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
