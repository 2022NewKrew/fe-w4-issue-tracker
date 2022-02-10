import React from "react";
import styled, { css } from "styled-components";

import { Wrapper, XSmallText } from "@atoms";
import { AlertCircleIcon, ArchieveIcon } from "@icons";
import { COLOR } from "@constants";

const IssueLabelWrapper = styled(XSmallText)`
  border-radius: 30px;
  padding: 4px 16px;
  ${({ backgroundColor, color }) => {
    return css`
      background-color: ${backgroundColor};
      color: ${color};
    `;
  }}
`;

const BigLabelWrapper = styled(Wrapper)`
  width: 100px;
  flex-direction: row;
  height: 40px;
  padding: 0 16px;
  ${({ backgroundColor, color }) => css`
    border: 1px solid ${color};
    color: ${color};
    background-color: ${backgroundColor};
  `}
  border-radius: 30px;
`;

const BigLabelText = styled(XSmallText)`
  margin-left: 10px;
  color: inherit;
`;

export function IssueLabel({ className, backgroundColor, color, text }) {
  return (
    <IssueLabelWrapper
      className={className}
      backgroundColor={backgroundColor}
      color={color}
    >
      {text}
    </IssueLabelWrapper>
  );
}

export function IssueOpenedLabel() {
  return (
    <BigLabelWrapper
      backgroundColor={COLOR.BLUE.LIGHT_BLUE}
      color={COLOR.BLUE.INITIAL}
    >
      <AlertCircleIcon />
      <BigLabelText>열린 이슈</BigLabelText>
    </BigLabelWrapper>
  );
}

export function IssueClosedLabel() {
  return (
    <BigLabelWrapper
      backgroundColor={COLOR.PURPLE.LIGHT_PURPLE}
      color={COLOR.PURPLE.PURPLE}
    >
      <ArchieveIcon />
      <BigLabelText>닫힌 이슈</BigLabelText>
    </BigLabelWrapper>
  );
}
