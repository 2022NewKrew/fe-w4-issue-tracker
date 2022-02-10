import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '@/assets/styles/GlobalStyle';
import Login from '@/pages/Login';
import IssueList from '@/pages/IssueList';
import Components from '@/pages/Components';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="components" element={<Components />} />
          <Route path="issue-list" element={<IssueList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
