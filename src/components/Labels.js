import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as AlertCircle } from "../assets/icons/alertCircle.svg";
import { ReactComponent as Archive } from "../assets/icons/archive.svg";
import { XSmallText } from "@components/Text";

const Container = styled.div`
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
  const color = props.type === "open" ? "blue" : "purple";
  const text = props.type === "open" ? "열린 이슈" : "닫힌 이슈";
  const icon = props.type === "open" ? <AlertCircle /> : <Archive />;
  return (
    <Container type={type}>
      {icon}
      <XSmallText color={color}>{text}</XSmallText>
    </Container>
  );
}
