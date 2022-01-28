import React from "react";
import styled from "styled-components";
import { COLOR } from "@constants/color.js";

export const Text = styled.span`
  font-family: Noto Sans KR, sans-serif;
  color: ${COLOR.GREYSCALE.BODY};
  font-style: normal;
`;

export const LargeText = styled(Text)`
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
`;
export const MediumText = styled(Text)`
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
`;
export const SmallText = styled(Text)`
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
`;
export const XSmallText = styled(Text)`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
`;
