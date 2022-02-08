import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Down } from "@assets/icons/down.svg";
import { ReactComponent as Search } from "@assets/icons/Search.svg";

const Container = styled.div`
  width: 601px;
  height: 40px;

  display: flex;
  align-items: center;
  box-sizing: border-box;

  overflow: hidden;

  border: 1px solid ${(props) => props.theme.greyscale.line};
  border-radius: 11px;

  ${(props) => {
    if (props.isFocus) {
      return css`
        border: 1px solid ${(props) => props.theme.greyscale.titleActive};
      `;
    }
  }}
`;

const Button = styled.button`
  display: flex;
  align-items: center;

  width: 128px;
  height: 100%;

  color: ${(props) => props.theme.greyscale.label};
  background-color: ${(props) => props.theme.greyscale.background};

  &:hover {
    background-color: ${(props) => props.theme.greyscale.line};
    color: ${(props) => props.theme.greyscale.body};
    cursor: pointer;
  }

  ${(props) => {
    if (props.isFocus) {
      return css`
        background-color: ${(props) => props.theme.greyscale.offWhite};
      `;
    }
  }}
`;

const Text = styled.p`
  width: 56px;
  padding: 6px 8px 6px 24px;
  margin: 0;

  text-align: left;

  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.small};

  color: ${(props) => props.theme.greyscale.label};

  ${Button}:hover >  & {
    color: ${(props) => props.theme.greyscale.body};
  }
`;

const Line = styled.div`
  width: 1px;
  height: 40px;
  background-color: ${(props) => props.theme.greyscale.line};
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;

  width: 472px;
  height: 40px;
  padding-left: 26px;

  background-color: ${(props) => props.theme.greyscale.inputBackground};

  &:focus-within {
    background-color: ${(props) => props.theme.greyscale.offWhite};
  }
`;

const Input = styled.input`
  width: 400px;
  height: 28px;

  padding-left: 11px;

  background-color: transparent;
`;

export function FilterBar({ setShowPanel, showPanel, value }) {
  const [isFocus, setIsFocus] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("is:issue is:open");

  function handleFocus() {
    setIsFocus(true);
    setPlaceholderText("Search all issues");
  }

  function handleBlur() {
    setIsFocus(false);
    setPlaceholderText("is:issue is:open");
  }

  function handleFilterClick() {
    setShowPanel(!showPanel);
  }

  return (
    <Container isFocus={isFocus}>
      <Button isFocus={isFocus} onClick={() => handleFilterClick()}>
        <Text>필터</Text>
        <Down></Down>
      </Button>
      <Line />
      <InputContainer>
        <Search />
        <Input
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          placeholder={placeholderText}></Input>
      </InputContainer>
    </Container>
  );
}
