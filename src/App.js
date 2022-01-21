import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { authService } from "./firebase";
import Auth from "@routes/Auth";
import IssueList from "@routes/IssueList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = authService.getAuth();
    authService.onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          displayName: user.displayName,
          uid: user.uid,
        });
      } else {
        setUser(null);
      }
    });
    setInit(true);
  }, []);

  return (
    <Main>
      {init ? (
        <BrowserRouter>
          {user ? (
            <Routes>
              <Route path="/" element={<IssueList />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Auth />} />
            </Routes>
          )}
        </BrowserRouter>
      ) : (
        <div>initializing..</div>
      )}
    </Main>
  );
}

export default App;
