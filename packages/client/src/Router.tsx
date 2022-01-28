import Add from "@pages/Add";
import ErrorBoundary from "@pages/ErrorBoundary";
import Issue from "@pages/Issue";
import Label from "@pages/Label";
import Login from "@pages/Login";
import Milestone from "@pages/Milestone";

import { Helmet } from "react-helmet";

import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route
            path="/login"
            element={[<Helmet title="login page" />, <Login />]}
          ></Route>
          <Route path="/issue/*" element={<Outlet />}>
            <Route
              path=""
              element={[<Helmet title="issue page" />, <Issue />]}
            />
            <Route
              path="new"
              element={[<Helmet title="issue add page" />, <Add />]}
            />
          </Route>
          <Route
            path="/label"
            element={[<Helmet title="label page" />, <Label />]}
          />
          <Route
            path="/milestone"
            element={[<Helmet title="milestone page" />, <Milestone />]}
          />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;
