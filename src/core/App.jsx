import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";

import Home from "@page/home";

const AsyncComponentsPage = importedComponent(() =>
  import("@page/components-page")
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
