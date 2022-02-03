import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useClickLink = (link: string | undefined | number) => {
  const navigate = useNavigate();
  const onClickLink = useCallback(() => {
    if (link) navigate(String(link));
  }, []);
  return onClickLink;
};
