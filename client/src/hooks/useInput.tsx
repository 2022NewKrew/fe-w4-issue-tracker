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
  const largeSuccessData = useSWR(
    checkTypeURL({ type, inputType, value, initialValue }),
    fetcher,
  ).data;

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

interface checkTypeProps {
  type: string;
  inputType: string;
  value?: string;
  initialValue?: string;
}
const checkTypeURL = ({ type, inputType, value, initialValue }: checkTypeProps) => {
  if (checkTypeTextLargeAndTypeId({ type, inputType, value, initialValue })) {
    return `/user/checkdup/${value}`;
  } else if (checkTypeTextSmallAndFilled({ type, inputType, value, initialValue })) {
    return `/user/checktitle/${value}`;
  } else return null;
};

const checkTypeTextLargeAndTypeId = ({ type, inputType, value, initialValue }: checkTypeProps) => {
  return value !== initialValue && type === "filled" && inputType === TYPE_TEXT_LARGE;
};
const checkTypeTextSmallAndFilled = ({ type, inputType, value, initialValue }: checkTypeProps) => {
  return type === "filled" && inputType === TYPE_TEXT_SMALL;
};
export default useInput;
