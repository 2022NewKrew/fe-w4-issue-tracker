import React from "react";
import { SmallButton } from "@components/buttons";
import { DropdownIndicators } from "@components/dropdownIndicators";
import { FilterBar } from "@components/filterBar";
import { Taps } from "@components/Taps";
import { LargeLabel } from "@components/Labels";

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
      <DropdownIndicators />
      <FilterBar />
      <Taps />
      <LargeLabel type='open' />
      <LargeLabel type='closed' />
    </div>
  );
}
