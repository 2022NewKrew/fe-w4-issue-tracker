import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Main />} />
      <Route exact path='/login' element={<Login />} />
    </Routes>
  );
};

export default App;
