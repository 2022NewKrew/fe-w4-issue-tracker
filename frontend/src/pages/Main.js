import React from "react";

import Header from "@components/organisms/Header";
import IssueListHeader from "@components/organisms/IssueListHeader";
import IssueTableContainer from "@components/templates/IssueTableContainer";

import { Button } from "@components/atoms/buttons";
import { useUserActions } from "../_actions";

export default function Main() {
  const userActions = useUserActions();

  return (
    <div>
      <Header />
      <IssueListHeader />
      <IssueTableContainer />
      <br />
      <Button size='medium' color='blue' onClick={userActions.logout}>
        로그아웃 하러 가기
      </Button>
    </div>
  );
}
