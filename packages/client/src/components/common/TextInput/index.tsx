import TextInputStyle from "./style";
import { sizeType } from "src/@types/emotion";

interface Props {
  id: string;
  size: sizeType;
  value: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  pattern?: string;
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
