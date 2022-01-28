import React from "react";
import styled from "styled-components";
import { MediumLogo, SmallLinkText, Wrapper } from "@atoms";
import { authService } from "@/firebase.js";

const _Wrapper = styled(Wrapper)`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 20px 0 40px 0;
`;

const ProfileImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 30px;
  border: 1px solid #d9dbe9;
  box-sizing: border-box;
  margin: 0 10px;
`;

const ProfileWrapper = styled(Wrapper)`
  flex-direction: row;
`;

function Header() {
  const auth = authService.getAuth();
  const url = auth.currentUser.photoURL;
  return (
    <_Wrapper>
      <MediumLogo>Issue Tracker</MediumLogo>
      <ProfileWrapper>
        <SmallLinkText onClick={() => auth.signOut()}>로그아웃</SmallLinkText>
        <ProfileImg src={url} />
      </ProfileWrapper>
    </_Wrapper>
  );
}

export default Header;
