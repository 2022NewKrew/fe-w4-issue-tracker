import React from "react";
import styled from "styled-components";
import { COLOR } from "@constants";
import { LargeButton } from "@atoms";
import { authService } from "@/firebase.js";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OAuthButton = styled(LargeButton)`
  margin: 10px;
`;

function OAuthForm() {
  const signInWithGithub = () => {
    const authProvider = new authService.GithubAuthProvider();
    const auth = authService.getAuth();
    authService.signInWithPopup(auth, authProvider);
  };

  return (
    <Wrapper>
      <OAuthButton color={COLOR.BLACK} onClick={signInWithGithub}>
        GitHub 계정으로 로그인
      </OAuthButton>
    </Wrapper>
  );
}

export default OAuthForm;
