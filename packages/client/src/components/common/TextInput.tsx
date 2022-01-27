import { colorType, sizeType } from "src/@types/emotion";

import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

interface Props extends TextInputProps {
  id: string;
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
    <Wrapper size={size}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
      />
      <label htmlFor={id}>{label}</label>
    </Wrapper>
  );
};

export default TextInput;

interface TextInputProps {
  size: sizeType;
}

const Wrapper = styled.div<TextInputProps>`
  ${({ theme: { text, greyscale, colors }, size }) => css`
    ${text.small}
    position: relative;
    overflow: hidden;
    width: 100%;
    ${{
      large: css`
        height: 64px;
        border-radius: 16px;
      `,
      medium: css`
        height: 56px;
        border-radius: 14px;
      `,
      small: css`
        height: 40px;
        border-radius: 11px;
        padding-left: 112px;
        label {
          height: 40px;
          display: flex;
          align-items: center;
        }
      `,
    }[size]}
    label {
      position: absolute;
      padding-left: 3px;
      left: 24px;
      top: 10px;
      bottom: 0;
      margin: auto 0;
      width: 100%;
      text-align: left;
      ${text.small};
      line-height: 100%;
      color: ${greyscale.placeholer};
      transform: translateY(0%);
      transition: all 0.3s ease;
      pointer-events: none;
    }
    input {
      height: 100%;
      width: 100%;
      background: ${greyscale.inputBackground};
      color: ${greyscale.titleActive};
      padding: 0px 24px;
      :required:focus:valid {
        ${VaildStyle("success", colors)}
      }
      :not([value=""]):focus:invalid {
        ${VaildStyle("error", colors)}
      }
      :not([value=""]) {
        padding-top: ${size !== "small" ? "4%" : ""};
        + label {
          ${text.xsmall};
          transform: ${size !== "small" ? "translateY(-18%)" : ""};
        }
      }
      :focus {
        background: ${greyscale.offWhite};
        border: 1px solid ${greyscale.titleActive};
      }
    }
  `}
`;

const VaildStyle = (color: colorType, colors: Theme["colors"]) => css`
  background: ${colors[color].light};
  border-color: ${colors[color].default};
  + label {
    color: ${colors[color].dark};
  }
`;
