import React from "react";
import styled from "styled-components";
import { COLOR } from "@constants";
import { LargeButton, Wrapper } from "@atoms";
import { GithubAuthProvider, getAuth, signInWithPopup } from "@/firebase.js";

const OAuthButton = styled(LargeButton)`
  margin: 10px;
`;

function OAuthForm() {
  const signInWithGithub = () => {
    const authProvider = new GithubAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, authProvider);
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
