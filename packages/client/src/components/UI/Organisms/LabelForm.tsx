import styled from "@emotion/styled";
import { useLabelFormStore } from "@stores/label";
import Atoms from "@UI/Atoms";
import { ColorCode, TextColorSelection, TextInput } from "@UI/Molecules";

const LabelForm = () => {
  const {
    labelForm,
    setName,
    setDescription,
    setBackgroundColor,
    setTextColor,
  } = useLabelFormStore();

  const { name, description, textColor, backgroundColor } = labelForm;

  return (
    <Wrapper>
      <Atoms.Title size="large">새로운 레이블 추가</Atoms.Title>
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
      <Atoms.Button
        size="small"
        icon="plus_white"
        text="완료"
        disabled={!name}
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

const PreView = styled(Atoms.Label)``;

const Wrapper = styled.form`
  width: 1280px;
  height: 345px;
  background: var(--offWhite);
  padding: 96px 32px 32px 344px;
  display: flex;
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
  & > button {
    margin-top: 24px;
    align-self: flex-end;
  }
  & > label:last-of-type {
    position: absolute;
    top: 198px;
    left: 131px;
  }
`;
