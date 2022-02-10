import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";

import Home from "@pages/home";
import Loading from "@pages/loading";

const AsyncComponentsPage = importedComponent(
  () => import("@pages/components-page"),
  {
    LoadingComponent: Loading,
  }
);
const AsyncIssueList = importedComponent(() => import("@pages/issue-list"), {
  LoadingComponent: Loading,
});
const AsyncNewIssue = importedComponent(() => import("@pages/new-issue"), {
  LoadingComponent: Loading,
});
const AsyncIssueDetail = importedComponent(
  () => import("@pages/issue-details"),
  {
    LoadingComponent: Loading,
  }
);
const AsyncLabelList = importedComponent(() => import("@pages/label-list"), {
  LoadingComponent: Loading,
});
const AsyncMilestoneList = importedComponent(
  () => import("@pages/milestone-list"),
  {
    LoadingComponent: Loading,
  }
);
const AsyncNoMatch = importedComponent(() => import("@pages/no-match"), {
  LoadingComponent: Loading,
});

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/components-page"
            element={<AsyncComponentsPage />}
          />
          <Route exact path="/issue-list" element={<AsyncIssueList />} />
          <Route exact path="/new-issue" element={<AsyncNewIssue />} />
          <Route exact path="/issue-details" element={<AsyncIssueDetail />} />
          <Route exact path="/label-list" element={<AsyncLabelList />} />
          <Route
            exact
            path="/milestone-list"
            element={<AsyncMilestoneList />}
          />
          <Route element={<AsyncNoMatch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
