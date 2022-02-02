import { useCallback, useState } from "react";

export const useSelection = (initValue: string) => {
  const [select, setValue] = useState(initValue);
  const onClick = useCallback((e: any) => {
    switch (e.target.tagName) {
      case "INPUT":
        setValue(e.target.id);
        break;
      case "LI":
        setValue(e.target.textContent);
        break;
      default:
        break;
    }
  }, []);
  return [select, onClick] as const;
};
