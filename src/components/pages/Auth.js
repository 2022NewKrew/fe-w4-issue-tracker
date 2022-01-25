import React from "react";
import { AuthForm } from "@molecules/";
import { authService } from "@/firebase";

function Auth() {
  const signInWithGithub = () => {
    const authProvider = new authService.GithubAuthProvider();
    const auth = authService.getAuth();
    authService.signInWithPopup(auth, authProvider);
  };

  return <AuthForm signInWithGithub={signInWithGithub} />;
}

export default Auth;
