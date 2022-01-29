import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: inherit;
    text-decoration: none;
  }
`;

export default function IssueListHeader() {
  return (
    <HeaderContainer>
      <FilterBar />
      <Wrapper>
        <Taps />
        <Button size='small' color='blue'>
          <StyledLink to='/create'>
            <Plus />
            이슈 작성
          </StyledLink>
        </Button>
      </Wrapper>
    </HeaderContainer>
  );
}
