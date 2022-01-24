import { sizeType } from "src/@types/emotion";
import { TextInputStyle } from "@styles/textInput";

interface Props {
  size: sizeType;
  label: string;
  value: string;
  onChange: (e: any) => void;
  required?: boolean;
  pattern?: string;
}

const TextInput = ({
  size,
  label,
  value,
  onChange,
  required,
  pattern,
}: Props) => {
  return (
    <div css={TextInputStyle({ size })}>
      <input
        id="userId"
        type="text"
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
      />
      <label htmlFor="userId">{label}</label>
    </div>
  );
};

export default TextInput;
