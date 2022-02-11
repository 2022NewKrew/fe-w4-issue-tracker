import { useEffect, useState } from "react";

export const useCheckbox = (idList) => {
  const [checkedIds, setCheckedIds] = useState(new Set());
  useEffect(() => setCheckedIds(new Set()), [idList]);

  const handleCheck = (id) => {
    if (checkedIds.delete(id)) {
      setCheckedIds(new Set([...checkedIds]));
    } else {
      setCheckedIds(new Set([...checkedIds, id]));
    }
  };

  const clearAll = () => {
    setCheckedIds(new Set());
  };

  const checkAll = () => {
    setCheckedIds(new Set([...idList]));
  };

  const isCheckedAll = checkedIds.size === idList.length;

  return [checkedIds, handleCheck, clearAll, checkAll, isCheckedAll];
};
