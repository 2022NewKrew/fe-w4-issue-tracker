import { ChangeEventHandler, FocusEventHandler, useState, useRef, EventHandler } from "react";

const AFTER_TYPING_WAIT = 1000;

export interface TextAreaProps {
  value: string;
  type: string;
  count: string;
  onFocus: FocusEventHandler<any>;
  onBlur: EventHandler<any>;
  onInput: ChangeEventHandler<any>;
}
export interface UseTextAreaProps {
  initialValue: string;
  inputType?: string;
}
const useTextArea = ({ initialValue }: UseTextAreaProps) => {
  const [value, setValue] = useState(initialValue);
  const [type, setType] = useState("initial");
  const [count, setCount] = useState("");
  let curCountTimeout: any = useRef<number>(0);
  const onInput: ChangeEventHandler<any> = ({ target }) => {
    setType("typing");
    setValue(target.value);
    clearTimeout(curCountTimeout.current);
    curCountTimeout.current = setTimeout(() => {
      setCount(`띄어쓰기 포함 ${value.length}자`);
    }, AFTER_TYPING_WAIT);
  };
  const onFocus: FocusEventHandler = () => {
    setType("active");
  };
  const onBlur: FocusEventHandler = () => {
    if (value === initialValue || value === "") {
      setType("initial");
      setValue(initialValue);
    } else {
      setType("filled");
    }
  };
  return { value, type, count, onInput, onFocus, onBlur };
};

export default useTextArea;
