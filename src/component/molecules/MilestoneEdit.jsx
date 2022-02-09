import { useMutation, useQueryClient } from "react-query";
import { patchMilestone } from "../../api/api";
import { useNewMilestone } from "../../hooks/useNewMilestone";
import { Button } from "../atoms/Button";
import { EditMilestoneWrapper, MilestoneButtonWrapper, NewMilestoneForm, NewMilestoneHeader } from "./MilestoneGenerateCommon";

export const MilestoneEdit = ({ initState, closeFn }) => {
  const queryClient = useQueryClient();
  const newMutation = useMutation(patchMilestone, {
    onSuccess: () => {
      queryClient.invalidateQueries("milestones");
      closeFn();
    },
  });
  const [newMilestone, dispatch, disabled] = useNewMilestone(initState);

  return (
    <EditMilestoneWrapper>
      <NewMilestoneHeader>마일스톤 편집</NewMilestoneHeader>
      <NewMilestoneForm label={newMilestone} dispatch={dispatch} />
      <MilestoneButtonWrapper>
        <Button options={{ type: "Small-Secondary", prefixIcon: "x-square" }} onClick={closeFn}>
          취소
        </Button>
        <Button options={{ type: "Small-Standard", prefixIcon: "edit" }} onClick={() => newMutation.mutate({ id: newMilestone.id, milestone: newMilestone })} disabled={disabled}>
          완료
        </Button>
      </MilestoneButtonWrapper>
    </EditMilestoneWrapper>
  );
};
