import React from "react";
import styled from "styled-components";
import { MediumLogo } from "@atoms";
import { authService } from "@/firebase.js";

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1200px;
  height: 80px;
`;

const ProfileImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 30px;
  border: 1px solid #d9dbe9;
  box-sizing: border-box;
`;

function Header() {
  const auth = authService.getAuth();
  const url = auth.currentUser.photoURL;
  return (
    <HeaderWrapper>
      <MediumLogo>Issue Tracker</MediumLogo>
      <ProfileImg src={url} />
    </HeaderWrapper>
  );
}

export default Header;
