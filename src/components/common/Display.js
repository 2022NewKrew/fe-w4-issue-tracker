import React from "react";
import styled from "styled-components";

export const StyledDisplay = styled.div`
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  font-size: 32px;
  line-height: 48px;
  color: #14142b;
`;

export const BoldDisplay = styled(StyledDisplay)`
  font-weight: bold;
`;

export const RegularDisplay = styled(StyledDisplay)`
  font-weight: normal;
`;
