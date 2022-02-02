import {
  ErrorBoundary,
  Login,
  Issue,
  Add,
  Label,
  Milestone,
  Test,
} from "@pages";
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
          <Route
            path="/test"
            element={[<Helmet title="test page" />, <Test />]}
          />
          <Route path="*" element={<Navigate replace to="/test" />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;
