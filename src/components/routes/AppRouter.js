import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Auth, Home } from "@pages";
import { authService } from "@/firebase.js";
import { IssueList } from "@templates";

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);

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

  if (!isLoggedIn) {
    return <Auth />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<IssueList />} />
        <Route path="issuelist" element={<IssueList />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
