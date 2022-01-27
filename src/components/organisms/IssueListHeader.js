import React from "react";
import styled from "styled-components";

import { FilterBar } from "@components/filterBar.js";
import { Taps } from "@components/Taps.js";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%:
  height: 80px;
  padding: 25px 80px;
`;

export default function IssueListHeader() {
  return (
    <HeaderContainer>
      <FilterBar />
      <Taps />
    </HeaderContainer>
  );
}
