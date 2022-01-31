import React from "react";
import styled from "styled-components";
import { SmallLink } from "@components/atoms/link";
import { ReactComponent as Plus } from "@assets/icons/plus.svg";

const SidebarContainer = styled.div`
  width: 308px;
  border: 1px solid ${(props) => props.theme.greyscale.line};
  border-radius: 16px;

  background-color: ${(props) => props.theme.greyscale.offWhite};

  div + div {
    border-top: 1px solid ${(props) => props.theme.greyscale.line};
  }
`;

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 34px 32px;

  svg {
    cursor: pointer;
  }
`;

export function Sidebar() {
  return (
    <SidebarContainer>
      {/* 담당자 */}
      <Wrapper>
        <Header>
          <SmallLink>담당자</SmallLink>
          <Plus />
        </Header>
      </Wrapper>
      {/* 레이블 */}
      <Wrapper>
        <Header>
          <SmallLink>레이블</SmallLink>
          <Plus />
        </Header>
      </Wrapper>
      {/* 마일스톤 */}
      <Wrapper>
        <Header>
          <SmallLink>마일스톤</SmallLink>
          <Plus />
        </Header>
      </Wrapper>
    </SidebarContainer>
  );
}
