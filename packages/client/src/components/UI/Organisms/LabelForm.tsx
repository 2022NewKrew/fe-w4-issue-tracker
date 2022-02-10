import styled from "@emotion/styled";
import { FormMode, useLabelFormStore, useLabelMutation } from "@stores/label";
import Atoms from "@UI/Atoms";
import {
  ColorCode,
  CustomButton,
  TextColorSelection,
  TextInput,
} from "@UI/Molecules";
import { FormEvent, useCallback } from "react";

const LabelForm = ({ mode }: SProps) => {
  const {
    labelForm,
    setName,
    setDescription,
    setBackgroundColor,
    setTextColor,
    labelFormMode,
    setLabelFormMode,
  } = useLabelFormStore();

  const { addLabel, modifyLabel } = useLabelMutation();

  const { name, description, textColor, backgroundColor } = labelForm;

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (labelFormMode === "add") {
        addLabel();
      } else {
        modifyLabel();
      }
    },
    [labelFormMode]
  );

  const onCancel = useCallback(() => setLabelFormMode("close"), []);

  return (
    <Wrapper onSubmit={onSubmit} mode={mode}>
      <Atoms.Title size="large">
        {labelFormMode === "add" ? "새로운 레이블 추가" : "레이블 편집"}
      </Atoms.Title>
      <TextInput
        label="레이블 이름"
        size="small"
        value={name}
        onChange={setName}
      />
      <TextInput
        label="설명(선택)"
        size="small"
        value={description}
        onChange={setDescription}
      />
      <div className="colorOption">
        <ColorCode
          value={backgroundColor}
          onChange={setBackgroundColor}
          reset={() => {}}
        />
        <TextColorSelection value={textColor} onChange={setTextColor} />
      </div>
      <CustomButton.FormButton
        onCancel={onCancel}
        formMode={labelFormMode}
        disabled={!labelForm.name}
      />
      <PreView
        type="custom"
        color={labelForm.textColor}
        bgColor={labelForm.backgroundColor}
        text={labelForm.name || "레이블 이름"}
      />
    </Wrapper>
  );
};

export default LabelForm;

interface SProps {
  mode: FormMode;
}

const Wrapper = styled.form<SProps>`
  display: ${({ mode }) => (mode === "close" ? "none" : "flex")};
  ${({ mode }) =>
    mode === "add"
      ? `
      border-radius: 16px;
      margin-top: 24px;`
      : ""}
  border: 1px solid var(--line);
  width: 1280px;
  height: 345px;
  background: var(--offWhite);
  padding: 96px 32px 32px 344px;
  flex-direction: column;
  position: relative;
  & > h2 {
    position: absolute;
    top: 32px;
    left: 32px;
  }
  & > .TextInput {
    width: 904px;
    margin-bottom: 16px;
  }
  & > .colorOption {
    display: flex;
    width: 608px;
    justify-content: space-between;
  }
  & > .ButtonGroup,
  & > .FormButton {
    margin-top: 24px;
    align-self: flex-end;
  }
  & > label:last-of-type {
    position: absolute;
    top: 198px;
    left: 131px;
  }
`;

const PreView = styled(Atoms.Label)``;
