import Issue from "@pages/Issue";
import Label from "@pages/Label";
import Login from "@pages/Login";
import Milestone from "@pages/Milestone";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/label" element={<Label />} />
        <Route path="/milestone" element={<Milestone />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
