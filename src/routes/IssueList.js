import React, { useEffect } from "react";
import styled from "styled-components";
import { authService } from "../firebase";

//TODO: auth 테스트용 임시 컴포넌트의 형태 -> 이후 Fix 필요
function IssueList() {
  const auth = authService.getAuth();
  return (
    <div>
      <div>IssueList</div>
      <button
        onClick={() => {
          authService.signOut(auth);
        }}
      >
        sign out
      </button>
    </div>
  );
}

export default IssueList;
