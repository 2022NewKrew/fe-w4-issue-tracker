import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "@pages/Main";
import Login from "@pages/Login";

import { useRecoilValue } from "recoil";
import { userState } from "./atoms/atoms";

const App = () => {
  const user = useRecoilValue(userState);
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
