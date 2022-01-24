import { ChangeEventHandler, FocusEventHandler, useState, EventHandler } from "react";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";

const TYPE_TEXT_LARGE = "TextInputLarge";
const TYPE_TEXT_SMALL = "TextInputSmall";
export interface TextInputProps {
  value?: string;
  type: string;
  onFocus: FocusEventHandler;
  onBlur: FocusEventHandler;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export interface UseInputProps {
  initialValue?: string;
  inputType?: string;
}
const useInput = ({ initialValue, inputType = "" }: UseInputProps) => {
  const [value, setValue] = useState(initialValue);
  const [type, setType] = useState("initial");
  const largeSuccessData = useSWR(checkTypeURL(type, inputType, value, initialValue), fetcher).data;

  if (!!largeSuccessData) {
    largeSuccessData.status === "success" ? setType("success") : setType("error");
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setType("typing");
    setValue(target.value);
  };
  const onFocus: FocusEventHandler = () => {
    setType("active");
  };
  const onBlur: FocusEventHandler = () => {
    if (value !== "" && value !== initialValue) {
      setType("filled");
    } else {
      setType("initial");
      setValue(initialValue);
    }
  };

  return { value, type, onChange, onFocus, onBlur };
};
const checkTypeURL = (type: string, inputType: string, value?: string, initialValue?: string) => {
  if (value !== initialValue && type === "filled" && inputType === TYPE_TEXT_LARGE) {
    return `/user/checkdup/${value}`;
  } else if (type === "filled" && inputType === TYPE_TEXT_SMALL) {
    return `/user/checktitle/${value}`;
  } else return null;
};
export default useInput;
