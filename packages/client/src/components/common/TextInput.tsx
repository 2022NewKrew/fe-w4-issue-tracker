import { sizeType } from "src/@types/emotion";
import { TextInputStyle } from "@styles/textInput";

interface Props {
  id: string;
  size: sizeType;
  value: string;
  onChange: (e: any) => void;
  label?: string;
  required?: boolean;
  pattern?: string;
  type?: string;
}

const TextInput = ({
  id,
  size,
  value,
  onChange,
  required,
  pattern,
  label,
  type = "text",
}: Props) => {
  return (
    <div css={TextInputStyle({ size })}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default TextInput;
