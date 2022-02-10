import styled from "@emotion/styled";
import Atoms from "@UI/Atoms";
import { v4 } from "uuid";

interface Props extends SProps {
  value: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  pattern?: string;
  errormsg?: string;
  autoFocus?: boolean;
}

const TextInput = ({
  size,
  value,
  onChange,
  required,
  pattern,
  label,
  type = "FontSize",
  errormsg,
  autoFocus = false,
}: Props) => {
  const uuid = v4();

  return (
    <SInputWrapper size={size} className="TextInput">
      <input
        id={uuid}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
        placeholder=" "
        autoFocus={autoFocus}
      />
      <Atoms.Placeholder
        id={uuid}
        label={label}
        size={size}
        typing={value !== ""}
      />
      <div className="errormsg">{errormsg}</div>
    </SInputWrapper>
  );
};

export default TextInput;

interface SProps {
  size: "large" | "medium" | "small";
}

const SInputWrapper = styled(Atoms.InputWrapper)<SProps>`
  ${({ size }) => sizeList[size]}
  & > input {
    ${({ size }) => sizeList[size]}
    width: 100%;
    height: 100%;
    ${({ theme }) => theme.FontSize.small};
    color: var(--titleActive);
    padding-left: ${({ size }) => (size !== "small" ? "24px" : "112px")};
    :required:invalid:focus:not(:placeholder-shown) {
      ${vaildStyle("error")}
      & ~ .errormsg {
        height: min-content;
      }
    }
    :required:valid:focus:not(:placeholder-shown) {
      ${vaildStyle("success")}
    }
    :not(:placeholder-shown) {
      padding-top: ${({ size }) => (size === "large" ? "28px" : "")};
      padding-top: ${({ size }) => (size === "medium" ? "24px" : "")};
    }
  }
  .errormsg {
    ${({ theme }) => theme.FontSize.xsmall};
    margin-top: 8px;
    height: 0;
    transition: 0.28s;
    overflow: hidden;
    color: var(--error-default);
  }
`;

const sizeList = {
  large: `
    width: 340px;
    height: 64px;
    border-radius: 16px;
  `,
  medium: `
    width: 320px;
    height: 56px;
    border-radius: 14px;
  `,
  small: `
    width: 300px;
    height: 40px;
    border-radius: 11px;
  `,
};

function vaildStyle(type: "error" | "success") {
  return `
  background: var(--${type}-light);
  border-color: var(--${type}-default);
  + label {
    color: var(--${type}-dark);
  }
  `;
}
