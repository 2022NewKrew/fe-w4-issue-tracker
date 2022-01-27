import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { SmallLink } from "@components/atoms/link";
import { SmallText } from "@components/atoms/Text";

import { ReactComponent as Tag } from "@assets/icons/tag.svg";
import { ReactComponent as Milestone } from "@assets/icons/milestone.svg";

const TapsContainer = styled.div`
  width: 320px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.greyscale.line};
  border-radius: 11px;

  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.greyscale.background};
`;

const TapContainer = styled.div.attrs((props) => ({
  type: props.type,
}))`
  width: 160px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background-color: ${(props) =>
    props.selected === props.type ? props.theme.greyscale.line : "none"};

  &:hover {
    background-color: ${(props) => props.theme.greyscale.inputBackground};
  }

  svg + p {
    margin-left: 9.89px;
  }

  p + p {
    margin-left: 8px;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 40px;
  background-color: ${(props) => props.theme.greyscale.line};
`;

export function Taps(props) {
  const [selected, setSelected] = useState("");

  const toggle = (e) => {
    const value = e.target.closest("[type]").attributes.type.value;
    value === selected ? setSelected("") : setSelected(value);
  };

  return (
    <TapsContainer onClick={(e) => toggle(e)}>
      <TapContainer selected={selected} type='label'>
        <Tag />
        <SmallLink>레이블</SmallLink>
        <SmallText>(0)</SmallText>
      </TapContainer>
      <Line />
      <TapContainer selected={selected} type='milestone'>
        <Milestone />
        <SmallLink>마일스톤</SmallLink>
        <SmallText>(0)</SmallText>
      </TapContainer>
    </TapsContainer>
  );
}
