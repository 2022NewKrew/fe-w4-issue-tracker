import { useLabelFormStore } from "@stores/label";
import Atoms from "@UI/Atoms";

export const LabelAddButton = () => {
  const { labelFormMode, setLabelFormMode } = useLabelFormStore();

  return labelFormMode === "close" ? (
    <Atoms.Button
      className="LabelAddButton"
      size="small"
      text="추가"
      icon="plus_white"
      onClick={() => setLabelFormMode("add")}
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

export const LabelFormButton = () => {
  const { labelForm, labelFormMode } = useLabelFormStore();

  return labelFormMode === "add" ? (
    <Atoms.Button
      className="LabelFormButton"
      size="small"
      icon="plus_white"
      text="완료"
      type="submit"
      disabled={!labelForm.name}
    />
  ) : null;
};
