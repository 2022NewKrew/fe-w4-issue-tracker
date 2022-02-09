import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FilterBar } from "@components/molecules/filterBar.js";
import { DropdownPanel } from "@components/molecules/DropdownPanel";
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

const FilterContainer = styled.div`
  position: relative;
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
  const [showPanel, setShowPanel] = useState(false);
  const [selected, setSelected] = useState([]);
  const menus = [
    "열린 이슈",
    "내가 작성한 이슈",
    "나에게 할당된 이슈",
    "내가 댓글을 남긴 이슈",
    "닫힌 이슈",
  ];

  return (
    <HeaderContainer>
      <FilterContainer>
        <FilterBar showPanel={showPanel} setShowPanel={setShowPanel} />
        <DropdownPanel
          show={showPanel}
          header='이슈 필터'
          type='text'
          menus={menus}
          selected={selected}
          setSelected={setSelected}
        />
      </FilterContainer>

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
