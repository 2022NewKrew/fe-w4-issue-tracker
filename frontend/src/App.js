import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "@pages/Main";
import Login from "@pages/Login";
import Label from "./pages/Label";
import Milestone from "./pages/Milestone";
import CreateIssue from "./pages/CreateIssue";
import IssueDetail from "./pages/IssueDetail";

import { useRecoilState } from "recoil";
import { userState } from "./_state/users";
import { useCookies } from "react-cookie";

const App = () => {
  const [user, setUser] = useRecoilState(userState);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  useEffect(() => {
    if (cookies.user) {
      setUser(cookies);
    }
  }, []);
  return (
    <Routes>
      <Route
        exact
        path='/'
        element={user ? <Main /> : <Navigate to={"/login"} />}
      />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/create' element={<CreateIssue />} />
      <Route exact path='/issues/:id' element={<IssueDetail />} />
      <Route exact path='/labels' element={<Label />} />
      <Route exact path='/milestones' element={<Milestone />} />
    </Routes>
  );
};

export default App;
