import React from "react";
import styled, { css } from "styled-components";

import { XSmallText } from "@atoms";

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

function IssueLabel({ className, backgroundColor, color, text }) {
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

export default IssueLabel;
