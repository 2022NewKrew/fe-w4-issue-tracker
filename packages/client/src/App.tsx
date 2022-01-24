import Issue from "@pages/Issue";
import Login from "@pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/issue" element={<Issue />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
