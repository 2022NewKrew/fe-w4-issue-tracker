import React from "react";
import { SmallButton } from "@components/buttons";
import { DropdownIndicators } from "@components/dropdownIndicators";
import { FilterBar } from "@components/filterBar";
import { Taps } from "@components/Taps";
import { LargeLabel, SmallLabel } from "@components/Labels";
import { DropdownPanel } from "@components/DropdownPanel";

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

  const dropdownMenus = [
    { id: 0, name: "열린 이슈" },
    { id: 1, name: "내가 작성한 이슈" },
    { id: 2, name: "나에게 할당된 이슈" },
    { id: 3, name: "내가 댓글을 남긴 이슈" },
    { id: 4, name: "닫힌 이슈" },
  ];
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
      <SmallLabel type='dark' text='레이블 이름' />
      <SmallLabel type='light' text='레이블 이름' />
      <SmallLabel type='line' text='작성자' />
      <br />
      <DropdownPanel type='text' menus={dropdownMenus} header='필터 이름' />
      <DropdownPanel type='image' menus={dropdownMenus} header='필터 이름' />
      <DropdownPanel type='modify' menus={dropdownMenus} header='상태 변경' />
    </div>
  );
}
