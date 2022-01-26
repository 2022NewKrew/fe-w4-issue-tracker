import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as AlertCircle } from "../assets/icons/alertCircle.svg";
import { ReactComponent as Archive } from "../assets/icons/archive.svg";
import { XSmallText } from "@components/Text";

const LargeContainer = styled.div`
  width: 100px;
  height: 40px;
  padding: 0 10px 0 13px;
  border-radius: 30px;
  box-sizing: border-box;

  display: flex;
  align-items: center;

  ${(props) => {
    if (props.type === "open") {
      return css`
        background-color: ${(props) => props.theme.colors.lightBlue};
        border: 1px solid ${(props) => props.theme.colors.blue};
        svg {
          color: ${(props) => props.theme.colors.blue};
        }
      `;
    } else if (props.type === "closed") {
      return css`
        background-color: ${(props) => props.theme.colors.lightPurple};
        border: 1px solid ${(props) => props.theme.colors.purple};
        svg {
          color: ${(props) => props.theme.colors.purple};
        }
      `;
    }
  }}

  svg + p {
    margin-left: 5.33px;
  }
`;

export function LargeLabel(props) {
  const type = props.type;
  const color = type === "open" ? "blue" : "purple";
  const text = type === "open" ? "열린 이슈" : "닫힌 이슈";
  const icon = type === "open" ? <AlertCircle /> : <Archive />;
  return (
    <LargeContainer type={type}>
      {icon}
      <XSmallText color={color}>{text}</XSmallText>
    </LargeContainer>
  );
}

const SmallContainer = styled.div`
  width: fit-content;
  border-radius: 30px;
  padding: 4px 16px;

  ${(props) => {
    if (props.type === "dark") {
      return css`
        background-color: ${(props) => props.theme.greyscale.background};
      `;
    } else if (props.type === "light") {
      return css`
        background-color: ${(props) => props.theme.greyscale.body};
      `;
    } else {
      return css`
        border: 1px solid ${(props) => props.theme.greyscale.line};
      `;
    }
  }}
`;

export function SmallLabel(props) {
  const type = props.type;
  const text = props.text;

  let color;
  if (type === "dark") {
    color = "titleActive";
  } else if (type === "light") {
    color = "offWhite";
  } else {
    color = "label";
  }
  return (
    <SmallContainer type={type}>
      <XSmallText color={color}>{text}</XSmallText>
    </SmallContainer>
  );
}
