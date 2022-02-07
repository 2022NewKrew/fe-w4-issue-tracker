import React, { useState } from "react";
import styled, { css } from "styled-components";

import { XSmallText } from "@components/atoms/Text";

const ProgressBar = styled.progress`
  display: block;

  width: 244px;
  height: 8px;
  border-radius: 10px;

  /* background: linear-gradient(to right, blue, pink); */
  /* background-color: red; */

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  ::-webkit-progress-bar {
    background-color: ${(props) => props.theme.greyscale.inputBackground};
    border-radius: 8px;
  }
  ::-webkit-progress-value {
    background-color: ${(props) => props.theme.colors.blue};
    border-radius: 8px;
  }
  ::-moz-progress-bar {
    background-color: ${(props) => props.theme.greyscale.inputBackground};
    border-radius: 8px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 8px;

  width: 244px;
`;

export function ProgressIndicator({ openIssues, closedIssues, type }) {
  const value = (closedIssues / (openIssues + closedIssues)) * 100;

  function showText() {
    if (type === "text") {
      return (
        <TextContainer>
          <XSmallText>{Math.round(value)}%</XSmallText>
          <XSmallText>
            열린 이슈 {openIssues} 닫힌 이슈 {closedIssues}
          </XSmallText>
        </TextContainer>
      );
    }
  }

  return (
    <>
      <ProgressBar value={value} max='100' />
      {showText()}
    </>
  );
}
