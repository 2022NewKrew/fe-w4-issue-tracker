import { useState } from "react";
import styled, { css } from "styled-components";
import { patchCheckedIssue } from "../../api/api";
import { Button } from "../atoms/Button";
import { SmallLabel } from "../atoms/Label";
import { cssFontSize } from "../atoms/Text";

export const LabelItem = ({ label, refetchList }) => {
  // 편집 모드
  const [editMode, setEdit] = useState(false);

  // 편집창 오픈
  const openEdit = () => {
    setEdit(true);
  };

  const submitEdit = async () => {
    refetchList();
  };

  if (editMode) {
    return (
      <LabelEdit>
        <Button options={{ type: "Small-Secondary", prefixIcon: "x-square" }} onClick={() => setEdit(false)}>
          취소
        </Button>
        <Button options={{ type: "Small-Standard", prefixIcon: "edit" }} onClick={() => setEdit(false)}>
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
        <Button options={{ type: "Small-Text", prefixIcon: "trash" }} onClick={() => {}}>
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
    width: 100%;
  `
);
