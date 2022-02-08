import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Auth, Home } from "@pages";
import { getAuth, onAuthStateChanged } from "@/firebase.js";
import { IssueCreation, IssueList } from "@templates";

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
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
        <Route path="issuecreation" element={<IssueCreation />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
