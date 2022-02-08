import React from "react";
import styled from "styled-components";

import { BigProfileImg, MediumLogo, SmallLinkText, Wrapper } from "@atoms";

import { getAuth } from "@/firebase.js";

const HeaderWrapper = styled(Wrapper)`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 20px 0 40px 0;
`;

const ProfileImg = styled(BigProfileImg)`
  margin: 0 10px;
`;

const ProfileWrapper = styled(Wrapper)`
  flex-direction: row;
`;

function Header() {
  const auth = getAuth();
  const url = auth.currentUser.photoURL;
  return (
    <HeaderWrapper>
      <MediumLogo>Issue Tracker</MediumLogo>
      <ProfileWrapper>
        <SmallLinkText onClick={() => auth.signOut()}>로그아웃</SmallLinkText>
        <ProfileImg src={url} />
      </ProfileWrapper>
    </HeaderWrapper>
  );
}

export default Header;
