import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { IssueCreation, IssueList } from "@templates";
import { Auth, Home } from "@pages";

import { getAuth, onAuthStateChanged, putUser } from "@/firebase.js";

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const isAuthAvailable = await putUser({
          id: user.uid,
          photoUrl: user.photoURL,
          name: user.reloadUserInfo.screenName,
        });
        if (isAuthAvailable) {
          setIsLoggedIn(!!user);
        } else {
          await auth.signOut();
          alert("ERROR: 로그인 할 수 없습니다.");
        }
      }
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
