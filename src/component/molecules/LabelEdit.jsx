import { useMutation, useQueryClient } from "react-query";
import { patchLabel } from "../../api";
import { useNewLabel } from "../../hooks/useNewLabel";
import { Button } from "../atoms/Button";
import { LabelButtonWrapper, NewLabelForm, NewLabelHeader, NewLabelPreview, EditLabelWrapper } from "./LabelGenerateCommon";

export const LabelEdit = ({ initState, closeFn }) => {
  const queryClient = useQueryClient();
  const editMutation = useMutation(patchLabel, {
    onSuccess: () => {
      queryClient.invalidateQueries("labels");
      closeFn();
    },
  });
  const [editedLabel, dispatch, disabled] = useNewLabel(initState);

  return (
    <EditLabelWrapper>
      <NewLabelHeader>레이블 편집</NewLabelHeader>
      <NewLabelPreview label={editedLabel} />
      <NewLabelForm label={editedLabel} dispatch={dispatch} />
      <LabelButtonWrapper>
        <Button options={{ type: "Small-Secondary", prefixIcon: "x-square" }} onClick={closeFn}>
          취소
        </Button>
        <Button options={{ type: "Small-Standard", prefixIcon: "edit" }} onClick={() => editMutation.mutate({ id: editedLabel.id, editedLabel })} disabled={disabled}>
          완료
        </Button>
      </LabelButtonWrapper>
    </EditLabelWrapper>
  );
};
