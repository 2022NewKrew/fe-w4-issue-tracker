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
            element={[<Helmet title="Login" />, <Login />]}
          ></Route>
          <Route path="/issue/*" element={<Outlet />}>
            <Route
              path=""
              element={[<Helmet title="IssueList" />, <Issue />]}
            />
            <Route
              path="add"
              element={[<Helmet title="Add Issue" />, <Add />]}
            />
            <Route
              path=":id"
              element={[<Helmet title="Issue Detail" />, <Add />]}
            />
          </Route>
          <Route
            path="/label"
            element={[<Helmet title="Label" />, <Label />]}
          />
          <Route
            path="/milestone"
            element={[<Helmet title="Milestone" />, <Milestone />]}
          />
          <Route path="/test" element={[<Helmet title="Test" />, <Test />]} />
          <Route path="*" element={<Navigate replace to="/test" />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;
