import React from "react";
import { Login, Component } from "./pages";
import { useRoutes } from "react-router-dom";

const App: React.FC = () => {
  const element = useRoutes([
    // These are the same as the props you provide to <Route>
    { path: "/", element: <Login /> },
    { path: "/component", element: <Component /> },
    { path: "/Login", element: <Login /> },
  ]);
  return <>{element}</>;
};

export default App;
