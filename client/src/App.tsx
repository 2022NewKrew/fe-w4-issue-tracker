/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';
import { theme } from '@styles/theme';
import LoginPage from './pages/LoginPage';
import IssueListPage from './pages/IssueListPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/issuelist" element={<IssueListPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
