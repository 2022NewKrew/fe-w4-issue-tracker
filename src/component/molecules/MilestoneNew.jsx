import { useMutation, useQueryClient } from "react-query";
import { postMilestone } from "../../api/api";
import { useNewMilestone } from "../../hooks/useNewMilestone";
import { Button } from "../atoms/Button";
import { MilestoneButtonWrapper, NewMilestoneForm, NewMilestoneHeader, NewMilestoneWrapper } from "./MilestoneGenerateCommon";

export const MilestoneNew = ({ closeFn }) => {
  const queryClient = useQueryClient();
  const newMutation = useMutation(postMilestone, {
    onSuccess: () => {
      queryClient.invalidateQueries("milestones");
      closeFn();
    },
  });
  const [newMilestone, dispatch, disabled] = useNewMilestone({
    title: "",
    deadline: "",
    description: "",
  });

  return (
    <NewMilestoneWrapper>
      <NewMilestoneHeader>새로운 레이블 추가</NewMilestoneHeader>
      <NewMilestoneForm label={newMilestone} dispatch={dispatch} />
      <MilestoneButtonWrapper>
        <Button options={{ type: "Small-Standard", prefixIcon: "edit" }} onClick={() => newMutation.mutate({ milestone: newMilestone })} disabled={disabled}>
          완료
        </Button>
      </MilestoneButtonWrapper>
    </NewMilestoneWrapper>
  );
};
