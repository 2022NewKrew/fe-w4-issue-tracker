import { useMutation, useQueryClient } from "react-query";
import { createNewLabel } from "../../api";
import { useNewLabel } from "../../hooks/useNewLabel";
import { randomHexColor } from "../../utils";
import { Button } from "../atoms/Button";
import { LabelButtonWrapper, NewLabelForm, NewLabelHeader, NewLabelPreview, NewLabelWrapper } from "./LabelGenerateCommon";

export const LabelNew = ({ closeFn }) => {
  const queryClient = useQueryClient();
  const newMutation = useMutation(createNewLabel, {
    onSuccess: () => {
      queryClient.invalidateQueries("labels");
      closeFn();
    },
  });
  const [newLabel, dispatch, disabled] = useNewLabel({
    name: "",
    description: "",
    backgroundColor: randomHexColor(),
    color: "#FEFEFE",
  });

  return (
    <NewLabelWrapper>
      <NewLabelHeader>새로운 레이블 추가</NewLabelHeader>
      <NewLabelPreview label={newLabel} />
      <NewLabelForm label={newLabel} dispatch={dispatch} />
      <LabelButtonWrapper>
        <Button options={{ type: "Small-Standard", prefixIcon: "edit" }} onClick={() => newMutation.mutate({ newLabel })} disabled={disabled}>
          완료
        </Button>
      </LabelButtonWrapper>
    </NewLabelWrapper>
  );
};
