import { TextInputProps, TextInputStyleProps } from "@interface/components";

import { colorType } from "src/@types/emotion";
import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

const TextInput = ({
  id,
  size,
  value,
  onChange,
  required,
  pattern,
  label,
  type = "text",
  errormsg,
}: TextInputProps) => {
  return (
    <Wrapper size={size}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
        placeholder=" "
      />
      <label htmlFor={id}>{label}</label>
      <div>{errormsg}</div>
    </Wrapper>
  );
};

export default TextInput;

const Wrapper = styled.div<TextInputStyleProps>`
  ${({ theme: { text, greyscale, colors }, size }) => css`
    ${text.small}
    position: relative;
    width: min-content;
    ${{
      large: css`
        height: 64px;
      `,
      medium: css`
        height: 56px;
      `,
      small: css`
        height: 40px;
      `,
    }[size]}
    label {
      position: absolute;
      padding-left: 3px;
      left: 24px;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      color: ${greyscale.placeholer};
      transition: all 0.3s ease;
    }
    div {
      ${text.xsmall}
      margin-top: 8px;
      height: 0;
      transition: 0.28s;
      overflow: hidden;
      color: ${colors.error.default};
    }
    input {
      color: ${greyscale.titleActive};
      background: ${greyscale.inputBackground};
      height: 100%;
      padding-left: 24px;
      ${{
        large: css`
          width: 340px;
          border-radius: 16px;
        `,
        medium: css`
          width: 320px;
          padding-top: 14px;
          border-radius: 14px;
        `,
        small: css`
          width: 300px;
          padding-left: 112px;
          border-radius: 11px;
        `,
      }[size]}

      :required:invalid:focus:not(:placeholder-shown) {
        ${VaildStyle("error", colors)}
        & ~ div {
          height: min-content;
        }
      }

      :required:valid:focus:not(:placeholder-shown) {
        ${VaildStyle("success", colors)}
      }

      :not(:placeholder-shown) {
        padding-top: ${size === "large" ? "18px" : ""};
        padding-top: ${size === "medium" ? "15px" : ""};
        + label {
          ${text.xsmall};
          transform: ${size !== "small" ? "translateY(-20%)" : ""};
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
