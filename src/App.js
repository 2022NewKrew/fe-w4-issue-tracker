import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "@pages/Main";
import Login from "@pages/Login";

import { useRecoilState } from "recoil";
import { userState } from "./atoms/atoms";
import { Cookies } from "react-cookie";

const App = () => {
  const [user, setUser] = useRecoilState(userState);
  const cookies = new Cookies();

  useEffect(() => {
    if (cookies.get("user")) {
      setUser(cookies.get("user"));
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
