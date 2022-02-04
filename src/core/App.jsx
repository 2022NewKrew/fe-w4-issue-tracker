import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";

import Home from "@page/Home";

const AsyncComponentsPage = importedComponent(() =>
  import("@page/ComponentsPage")
);

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/components" element={<AsyncComponentsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
