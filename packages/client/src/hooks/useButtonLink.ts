import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useButtonLink = (link: string | undefined) => {
  const navigate = useNavigate();
  const onClickLink = useCallback(() => {
    if (link) navigate(link);
  }, []);
  return onClickLink;
};
