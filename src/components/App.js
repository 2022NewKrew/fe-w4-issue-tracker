import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { authService } from "@/firebase";
import { Auth } from "@pages/";
import { ProtectedRoutes } from "@components/routes";

const Main = styled.div`
  position: absolute;
  background: #e5e5e5;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = authService.getAuth();
    authService.onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      setInit(true);
    });
  }, []);

  if (!init) {
    return <div>...initializing...</div>;
  }

  return (
    <Main>
      <Routes>
        <Route path="/" element={<ProtectedRoutes isLoggedIn={isLoggedIn} />} />
        <Route path="/auth" element={<Auth isLoggedIn={isLoggedIn} />} />
      </Routes>
    </Main>
  );
}

export default App;
