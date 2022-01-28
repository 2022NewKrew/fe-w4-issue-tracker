import Add from "@pages/Add";
import ErrorBoundary from "@pages/ErrorBoundary";
import Issue from "@pages/Issue";
import Label from "@pages/Label";
import Login from "@pages/Login";
import Milestone from "@pages/Milestone";
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
          <Route path="/login" element={<Login />} />
          <Route path="/issue/*" element={<Outlet />}>
            <Route path="" element={<Issue />} />
            <Route path="new" element={<Add />} />
          </Route>
          <Route path="/label" element={<Label />} />
          <Route path="/milestone" element={<Milestone />} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;
