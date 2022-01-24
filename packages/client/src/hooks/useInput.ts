import { useState, useCallback } from "react";

const useInput = (initValue: string) => {
  const [value, setValue] = useState(initValue);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    []
  );
  return { value, onChange };
};

export default useInput;
