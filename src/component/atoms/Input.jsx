import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import Text from "./Text";

export const Input = ({ options, placeholder, disabled, onChange, onFocus, onBlur, ...props }) => {
  const [isFocus, setFocus] = useState(false);
  const [isFilled, setFilled] = useState(false);
  const inputRef = useRef();

  const handleFocus = (e) => {
    setFocus(true);
    onFocus && onFocus(e);
  };
  const handleBlur = (e) => {
    setFocus(false);
    onBlur && onBlur(e);
  };
  const handleClick = () => {
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    if (inputRef.current.value !== "") {
      setFilled(true);
    } else {
      setFilled(false);
    }
    //inherit
    onChange && onChange(e);
  };

  const wrapperClassName = `${isFocus ? "focus" : ""} ${isFilled ? "filled" : ""}`;

  return (
    <Div options={options} className={wrapperClassName} onClick={handleClick} disabled={disabled}>
      <Text as="label" options={{ size: isFocus || isFilled ? "xsmall" : "small" }}>
        {placeholder}
      </Text>
      <Text as="input" options={{ size: "small" }} ref={inputRef} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} disabled={disabled} {...props} />
    </Div>
  );
};

const Div = styled.div`
  ${({ options: { size } }) => sizeType[size]};

  position: relative;
  color: ${({ theme }) => theme.grayscale.placeholder};
  cursor: text;
  background-color: ${({ theme }) => theme.grayscale.background};

  label {
    position: absolute;
    transition: 0.2s ease-in-out;
  }

  input {
    color: ${({ theme }) => theme.grayscale.titleActive};
  }

  &.focus {
    background-color: ${({ theme }) => theme.grayscale.offWhite};
    outline: 1px solid ${({ theme }) => theme.grayscale.titleActive};
  }

  &.focus,
  &.filled {
    color: ${({ theme }) => theme.grayscale.label};
  }

  &[disabled] {
    opacity: 0.5;
    cursor: inherit;
  }
`;

const sizeType = {
  large: css`
    height: 64px;
    padding: 28px 24px 8px 24px;
    border-radius: 16px;

    label {
      top: 18px;
      left: 24px;
    }

    &.focus,
    &.filled {
      label {
        top: 8px;
      }
    }
  `,
  medium: css`
    height: 56px;
    padding: 24px 24px 4px 24px;
    border-radius: 14px;

    label {
      top: 14px;
      left: 24px;
    }

    &.focus,
    &.filled {
      label {
        top: 4px;
      }
    }
  `,
  small: css`
    height: 40px;
    padding: 0px 24px 0px 112px;
    border-radius: 11px;

    input {
      height: 40px;
    }

    label {
      top: 4px;
      left: 24px;
    }

    &.focus,
    &.filled {
      label {
        top: 10px;
      }
    }
  `,
};
