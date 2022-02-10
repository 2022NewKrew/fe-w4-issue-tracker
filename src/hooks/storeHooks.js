import { isRecoilValue, useSetRecoilState } from "recoil";
import {
  forceIssueListUpdate,
  forceLabelListUpdate,
  forceMilestoneListUpdate,
} from "@stores";

const RECOIL_STATE_KEY = {
  ISSUE_LIST: "issueList",
  LABEL_LIST: "labelList",
  MILESTONE_LIST: "milestoneList",
};

export const useRefreshRecoilState = (state) => {
  const issueListRefreshTrigger = useSetRecoilState(forceIssueListUpdate);
  const labelListRefreshTrigger = useSetRecoilState(forceLabelListUpdate);
  const milestoneListRefreshTrigger = useSetRecoilState(
    forceMilestoneListUpdate
  );
  if (!isRecoilValue(state)) {
    return new Error(`${state} is not valuable parameter`);
  }
  const refreshParameterFunc = () => (n) => n + 1;
  const refreshRecoilState = {
    [RECOIL_STATE_KEY.ISSUE_LIST]: () => {
      issueListRefreshTrigger(refreshParameterFunc);
    },
    [RECOIL_STATE_KEY.LABEL_LIST]: () => {
      labelListRefreshTrigger(refreshParameterFunc);
    },
    [RECOIL_STATE_KEY.MILESTONE_LIST]: () => {
      milestoneListRefreshTrigger(refreshParameterFunc);
    },
  };
  const { key: stateKey } = state;
  return {
    refreshIssueList: refreshRecoilState[stateKey],
    refreshLabelList: refreshRecoilState[stateKey],
    refreshMilestoneList: refreshRecoilState[stateKey],
  };
};
