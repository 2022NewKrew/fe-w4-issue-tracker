import { Link, Navigate, Route, Routes } from "react-router-dom";
import { MainTemplate } from "./component/page/MainTemplate";
import { IssueHome } from "./component/page/issue/IssueHome";
import { Button } from "./component/atoms/Button";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { LabelMain } from "./component/page/label/LabelMain";
import { MilestoneMain } from "./component/page/milestone/MilestoneMain";
import { IssueDetail } from "./component/page/issue/IssueDetail";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
      cacheTime: Infinity,
    },
  },
});

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
        <Route path="/" element={<Navigate to="/issues" />} />
        <Route path="/login" element={defaultElementForTest} />
        <Route path="/*" element={<MainTemplate />}>
          <Route path="issues">
            <Route path="" element={<IssueHome />} />
            <Route path=":issueId" element={<IssueDetail />} />
            <Route path="new" element={defaultElementForTest} />
          </Route>
          <Route path="labels" element={<LabelMain />} />
          <Route path="milestones" element={<MilestoneMain />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
