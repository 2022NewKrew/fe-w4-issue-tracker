import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Refresh } from "@assets/icons/refresh.svg";

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 240px;
  height: 40px;

  background-color: ${(props) => props.theme.greyscale.inputBackground};
  border-radius: 11px;

  input + svg {
    margin-left: 8.67px;
  }

  svg {
    cursor: pointer;
  }
`;

const Label = styled.label`
  color: ${(props) => props.theme.greyscale.label};
  margin-left: 24px;
  width: 80px;
`;

const ColorInput = styled.input`
  width: 80px;

  outline: none;
  border: none;

  background-color: transparent;
`;

export function ColorCode(props) {
  const [inputValue, setInputValue] = useState("#");

  function handleInputChange(e) {
    let value = "";
    if (e.target.value.length > 7) {
      value = "#" + e.target.value.slice(1, 7);
    } else {
      value = "#" + e.target.value.substring(1);
    }
    setInputValue(value);
  }

  function handleRefreshClick(e) {
    const randomCode =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
    setInputValue(randomCode);
  }
  return (
    <Container>
      <Label>{props.label}</Label>
      <ColorInput value={inputValue} onChange={(e) => handleInputChange(e)} />
      <Refresh onClick={() => handleRefreshClick()} />
    </Container>
  );
}
