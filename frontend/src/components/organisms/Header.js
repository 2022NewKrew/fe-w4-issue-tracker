import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "@assets/icons/logo.svg";
import { ReactComponent as UserimageLarge } from "@assets/icons/userimageLarge.svg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%:
  height: 94px;
  padding: 25px 80px;

  svg {
    cursor:pointer;
  }
`;

export default function IssueList() {
  return (
    <HeaderContainer>
      <Link to='/'>
        <Logo />
      </Link>
      <UserimageLarge />
    </HeaderContainer>
  );
}
