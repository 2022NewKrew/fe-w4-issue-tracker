import { useState, useCallback } from "react";

export const useInput = (initValue: string) => {
  const [value, setValue] = useState(initValue);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    []
  );
  const reset = useCallback(() => {
    setValue(initValue);
  }, []);
  return [value, onChange, reset] as const;
};
