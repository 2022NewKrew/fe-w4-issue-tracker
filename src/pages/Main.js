import React from "react";
import { SmallButton } from "@components/buttons";

import { firebaseAuth } from "../firebase";

import { useSetRecoilState } from "recoil";
import { userState } from "../atoms/atoms";

import { useCookies } from "react-cookie";

export default function Main() {
  const setUser = useSetRecoilState(userState);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  function logout() {
    firebaseAuth.signOut();
    setUser(null);
    removeCookie("user");
  }
  return (
    <div>
      Main Page <br />
      <SmallButton onClick={logout}>로그아웃 하러 가기</SmallButton>
      <br />
    </div>
  );
}
