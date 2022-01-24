import { sizeKey } from "@styles/emotion";
import { TextInputStyle } from "@styles/textInput";

interface Props {
  size: sizeKey;
  label: string;
}

const TextInput = ({ size, label, ...props }: Props) => {
  return (
    <div css={TextInputStyle[size]}>
      <input id="userId" type="text" {...props} />
      <label htmlFor="userId">{label}</label>
    </div>
  );
};

export default TextInput;
