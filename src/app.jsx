import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '@/assets/styles/GlobalStyle';
import Login from '@/pages/Login';
import IssueList from '@/pages/IssueList';
import Components from '@/pages/Components';
import CreateIssue from '@/pages/CreateIssue';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IssueList />} />
          <Route path="components" element={<Components />} />
          <Route path="login" element={<Login />} />
          <Route path="issue-create" element={<CreateIssue />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
