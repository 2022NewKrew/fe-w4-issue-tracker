import { useEffect } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { useTheme } from "styled-components";
import { IssueHome } from "./component/page/issue/IssueHome";
import { IssuePage } from "./component/page/issue/IssuePage";
import { TestPage } from "./component/page/test/TestPage";
import { TestNew } from "./component/page/test/TestNew";
import { Button } from "./component/atoms/Button";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/issue" />} />
        <Route path="/issue" element={<IssuePage />}>
          <Route path="" element={<IssueHome />} />
        <Route
            path="*"
          element={
              <Link to="/issue">
                <Button options={{ type: "Medium-Standard" }}>이슈 목록으로</Button>
              </Link>
          }
          />
        </Route>
        <Route path="/test" element={<TestPage />}>
          <Route path="new" element={<TestNew />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
