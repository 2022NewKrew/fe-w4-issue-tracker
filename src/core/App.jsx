import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";

import Home from "@pages/home";

const AsyncComponentsPage = importedComponent(() =>
  import("@pages/components-page")
);
const AsyncIssueList = importedComponent(() => import("@pages/issue-list"));
const AsyncNewIssue = importedComponent(() => import("@pages/new-issue"));
const AsyncIssueDetail = importedComponent(() =>
  import("@pages/issue-details")
);
const AsyncLabelList = importedComponent(() => import("@pages/label-list"));
const AsyncMilestoneList = importedComponent(() =>
  import("@pages//milestone-list")
);

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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
