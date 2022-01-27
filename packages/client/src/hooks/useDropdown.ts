import { useState, useCallback, useEffect } from "react";

export const useDropdown = () => {
  const [visible, setVisible] = useState(false);

  const open = useCallback(() => {
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    if (visible) {
      document.addEventListener("click", close);
    }
    return () => {
      document.removeEventListener("click", close);
    };
  }, [visible]);

  return [visible, open] as const;
};
