import React from "react";
import styled from "styled-components";

export const StyledText = styled.span`
  font-family: Noto Sans KR, sans-serif;
  color: #4e4b66;
  font-style: normal;
`;

export const LargeText = styled(StyledText)`
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
`;
export const MediumText = styled(StyledText)`
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
`;
export const SmallText = styled(StyledText)`
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
`;
export const XSmallText = styled(StyledText)`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
`;
