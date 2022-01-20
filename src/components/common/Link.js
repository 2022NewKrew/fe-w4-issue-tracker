import React from "react";
import styled from "styled-components";

export const StyledLink = styled.span`
  font-family: Noto Sans KR, sans-serif;
  color: #4e4b66;
  font-style: normal;
  font-weight: bold;
`;

export const LargeLink = styled(StyledLink)`
  font-size: 24px;
  line-height: 40px;
`;
export const MediumLink = styled(StyledLink)`
  font-size: 18px;
  line-height: 32px;
`;
export const SmallLink = styled(StyledLink)`
  font-size: 16px;
  line-height: 28px;
`;
export const XSmallLink = styled(StyledLink)`
  font-size: 12px;
  line-height: 20px;
`;
