import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Auth from "@routes/Auth";
import { Route, Routes } from "react-router-dom";
import IssueList from "@routes/IssueList";
import { authService } from "./firebase";

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
      setInit(true);
    });
  }, []);

  return (
    <Main>
      {init ? (
        user ? (
          <Routes>
            <Route path="/" element={<IssueList />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Auth />} />
          </Routes>
        )
      ) : (
        <div>...initializing...</div>
      )}
    </Main>
  );
}

export default App;
