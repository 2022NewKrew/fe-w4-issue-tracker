import React from "react";

import Header from "@components/organisms/Header";
import IssueListHeader from "../components/organisms/IssueListHeader";
import IssueTableContainer from "../components/templates/IssueTableContainer";

import { Button } from "@components/atoms/buttons";

import { firebaseAuth } from "../firebase";

import { useSetRecoilState } from "recoil";
import { userState } from "../atoms/atoms";

import { useCookies } from "react-cookie";
import IssueList from "./IssueList";

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
      <Header />
      <IssueListHeader />
      <IssueTableContainer />
      <br />
      <Button size='medium' color='blue' onClick={logout}>
        로그아웃 하러 가기
      </Button>
    </div>
  );
}
