import React from "react";
import { AuthForm } from "@molecules/";
import { authService } from "@/firebase";
import { useLocation, Navigate } from "react-router-dom";

function Auth({ isLoggedIn }) {
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (isLoggedIn) {
    return <Navigate to={from} replace={true} />;
  }

  const signInWithGithub = () => {
    const authProvider = new authService.GithubAuthProvider();
    const auth = authService.getAuth();
    authService.signInWithPopup(auth, authProvider);
  };

  return <AuthForm signInWithGithub={signInWithGithub} />;
}

export default Auth;
