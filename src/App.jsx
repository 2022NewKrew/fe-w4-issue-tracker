import { useEffect } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { useTheme } from "styled-components";
import { MainTemplate } from "./component/page/MainTemplate";
import { IssueHome } from "./component/page/issue/IssueHome";
import { TestPage } from "./component/page/test/TestPage";
import { TestNew } from "./component/page/test/TestNew";
import { Button } from "./component/atoms/Button";

function App() {
  const defaultElementForTest = (
    <>
      <p>미완성</p>
      <Link to="/issue">
        <Button options={{ type: "Medium-Standard" }}>이슈 목록으로</Button>
      </Link>
    </>
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/issue" />} />
        <Route path="/login" element={defaultElementForTest} />
        <Route path="*" element={<MainTemplate />}>
          <Route path="issue">
            <Route path="" element={<IssueHome />} />
            <Route path="new" element={defaultElementForTest} />
          </Route>
          <Route path="labels" element={defaultElementForTest} />
          <Route path="milestones" element={defaultElementForTest} />
          <Route path="test" element={<TestPage />}>
            <Route path="new" element={<TestNew />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
