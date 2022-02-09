import { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "CHANGE_DESCRIPTION":
      return {
        ...state,
        description: action.description,
      };
    case "CHANGE_BACKGROUNDCOLOR":
      return {
        ...state,
        backgroundColor: action.backgroundColor,
      };
    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
};

export const useNewLabel = (initState) => {
  const [newLabel, dispatch] = useReducer(reducer, initState);

  // name 이 비어있을 경우 비활성화
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (disabled && newLabel.name !== "") {
      setDisabled(false);
    } else if (!disabled && newLabel.name === "") {
      setDisabled(true);
    }
  }, [newLabel.name]);

  return [newLabel, dispatch, disabled];
};
