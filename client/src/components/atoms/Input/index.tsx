import React from "react";
import TextInputLarge from "./TextInputLarge";
import TextInputMedium from "./TextInputMedium";
import TextInputSmall from "./TextInputSmall";
import TextArea from "./TextArea";
import FileInput from "./FileInput";

export interface InputProps {
  name?: string;
  type?: string;
  className?: string;
  margin?: string;
  padding?: string;
  textAlign?: string;
  cssValue?: any;
  props?: Record<string, any>;
}
export interface StyleProps {
  theme: {
    color: {
      primary?: string;
      primaryC1?: string;
      primaryC2?: string;
      label?: string;
      body?: string;
      titleActive?: string;
      offWhite?: string;
    };
  };
  margin?: string;
  padding?: string;
  textAlign?: string;
  cssValue?: any;
}

interface InputFactoryProps extends InputProps {
  type: string;
}
const Input: React.FC<InputFactoryProps> = ({ type, name, ...props }) => {
  switch (type) {
    case "large":
      return <TextInputLarge name={name} {...props}></TextInputLarge>;
    case "medium":
      return <TextInputMedium name={name} {...props}></TextInputMedium>;
    case "small":
      return <TextInputSmall name={name} {...props}></TextInputSmall>;
    case "textarea":
      return <TextArea name={name} {...props}></TextArea>;
    case "file":
      return <FileInput type={type} {...props}></FileInput>;
    default:
      return <TextInputLarge name={name} {...props}></TextInputLarge>;
  }
};

export default Input;
