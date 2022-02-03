import React from "react";
import styled from "styled-components";

import { FilterBar } from "@components/molecules/filterBar.js";
import { Taps } from "@components/molecules/Taps.js";
import { Button } from "@components/atoms/buttons";
import { ReactComponent as Plus } from "@assets/icons/plus.svg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%:
  height: 80px;
  padding: 25px 80px;

  button {
    display: flex;
    align-items: center;
    svg {
      margin-right: 7.33px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: 16px;
  }
`;

export default function IssueListHeader() {
  return (
    <HeaderContainer>
      <FilterBar />
      <Wrapper>
        <Taps />
        <Button size='small' color='blue'>
          <Plus />
          이슈 작성
        </Button>
      </Wrapper>
    </HeaderContainer>
  );
}
