import { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return {
        ...state,
        title: action.title,
      };
    case "CHANGE_DEADLINE":
      return {
        ...state,
        deadline: action.deadline,
      };
    case "CHANGE_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    default:
      return state;
  }
};

export const useNewMilestone = (initState) => {
  const [newMilestone, dispatch] = useReducer(reducer, initState);

  // title 이 비어있을 경우 비활성화
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (disabled && newMilestone.title !== "") {
      setDisabled(false);
    } else if (!disabled && newMilestone.title === "") {
      setDisabled(true);
    }
  }, [newMilestone.title]);

  return [newMilestone, dispatch, disabled];
};
