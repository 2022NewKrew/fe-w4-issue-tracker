import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "@pages/Main";
import Login from "@pages/Login";

import { useRecoilState } from "recoil";
import { userState } from "./atoms/atoms";
import { useCookies } from "react-cookie";

const App = () => {
  const [user, setUser] = useRecoilState(userState);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  useEffect(() => {
    if (cookies) {
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
    </Routes>
  );
};

export default App;
