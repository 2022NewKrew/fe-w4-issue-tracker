import React from "react";
import styled from "styled-components";

const MONTSERRAT_FONT_URL =
  "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,500&display=swap";
export const Logo = styled.h1`
  @import url(${MONTSERRAT_FONT_URL});
  font-family: Montserrat, sans-serif;
  font-style: italic;
  letter-spacing: -0.04em;
  color: #14142b;
`;

export const LargeLogo = styled(Logo)`
  font-weight: normal;
  font-size: 56px;
  line-height: 72px;
`;

export const MediumLogo = styled(Logo)`
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
`;
