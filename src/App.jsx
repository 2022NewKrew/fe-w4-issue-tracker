import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/test" />} />
        <Route
          path="/test"
          element={
            <div>
              <p>test</p>
              <Link to="new">new-link</Link>
              <Outlet />
            </div>
          }
        >
          <Route path="new" element={<div>new</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
