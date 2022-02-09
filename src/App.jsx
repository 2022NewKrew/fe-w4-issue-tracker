import { Link, Navigate, Route, Routes } from "react-router-dom";
import { MainTemplate } from "./component/page/MainTemplate";
import { IssueHome } from "./component/page/issue/IssueHome";
import { TestPage } from "./component/page/test/TestPage";
import { TestNew } from "./component/page/test/TestNew";
import { Button } from "./component/atoms/Button";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { LabelMain } from "./component/page/label/LabelMain";
import { MilestoneMain } from "./component/page/milestone/MilestoneMain";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Navigate to="/issue" />} />
        <Route path="/login" element={defaultElementForTest} />
        <Route path="*" element={<MainTemplate />}>
          <Route path="issue">
            <Route path="" element={<IssueHome />} />
            <Route path="new" element={defaultElementForTest} />
          </Route>
          <Route path="labels" element={<LabelMain />} />
          <Route path="milestones" element={<MilestoneMain />} />
          <Route path="test" element={<TestPage />}>
            <Route path="new" element={<TestNew />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
