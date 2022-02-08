import { ChangeEventHandler, FocusEventHandler, useState, EventHandler } from "react";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import { TEXT_INPUT_TYPE, INPUT_TYPE, INPUT_CLASS_TYPE } from "@/constants/type";

export interface TextInputProps {
  value: any;
  className: string;
  onFocus: FocusEventHandler;
  onBlur: FocusEventHandler;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export interface UseInputProps {
  initialValue?: string;
  inputType?: string | "FilterBar";
  loginType?: "아이디" | "비밀번호" | string;
}
const useInput = ({ initialValue = "", inputType = "", loginType = "" }: UseInputProps) => {
  const [value, setValue] = useState(initialValue);
  const [className, setClassName] = useState(INPUT_CLASS_TYPE.INITIAL);
  const largeSuccessData = useSWR(
    checkTypeURL({ className, inputType, value, initialValue, loginType }),
    fetcher,
  ).data;

  if (!!largeSuccessData) {
    largeSuccessData.status === INPUT_CLASS_TYPE.SUCCESS
      ? setClassName(INPUT_CLASS_TYPE.SUCCESS)
      : setClassName(INPUT_CLASS_TYPE.ERROR);
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setClassName(INPUT_CLASS_TYPE.TYPING);
    setValue(target.value);
  };
  const onFocus: FocusEventHandler = () => {
    setClassName(INPUT_CLASS_TYPE.ACTIVE);
    if (inputType === INPUT_TYPE.FILTERBARS) setValue("Search all issues");
  };
  const onBlur: FocusEventHandler = () => {
    if (inputType === INPUT_TYPE.FILTERBARS && value === "Search all issues") {
      setClassName(INPUT_CLASS_TYPE.INITIAL);
      setValue(initialValue);
    } else {
      if (value !== "" && value !== initialValue) {
        setClassName(INPUT_CLASS_TYPE.FILLED);
      } else {
        console.log(initialValue);
        setClassName(INPUT_CLASS_TYPE.INITIAL);
        setValue(initialValue);
      }
    }
  };

  return { value, className, onChange, onFocus, onBlur };
};

interface checkTypeProps {
  className: string;
  inputType: string;
  value?: string;
  initialValue?: string;
  loginType?: "아이디" | "비밀번호" | string;
}
const checkTypeURL = ({ className, inputType, value, initialValue, loginType }: checkTypeProps) => {
  if (checkTypeTextLargeAndTypeId({ className, inputType, value, initialValue, loginType })) {
    return `/user/checkdup/${value}`;
  } else if (checkTypeTextSmallAndFilled({ className, inputType })) {
    return `/user/checktitle/${value}`;
  } else return null;
};

const checkTypeTextLargeAndTypeId = ({
  className,
  inputType,
  value,
  initialValue,
  loginType,
}: checkTypeProps) => {
  return (
    value !== initialValue &&
    className === INPUT_CLASS_TYPE.FILLED &&
    inputType === TEXT_INPUT_TYPE.LARGE &&
    loginType === INPUT_TYPE.ID
  );
};
const checkTypeTextSmallAndFilled = ({ className, inputType }: checkTypeProps) => {
  return className === INPUT_CLASS_TYPE.FILLED && inputType === TEXT_INPUT_TYPE.SMALL;
};
export default useInput;
