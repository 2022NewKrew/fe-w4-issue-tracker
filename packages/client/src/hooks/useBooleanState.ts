import { useState, useCallback } from "react";

export const useBooleanState = (initValue: boolean) => {
  const [value, setValue] = useState(initValue);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, setTrue, setFalse] as const;
};
