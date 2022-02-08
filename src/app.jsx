import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '@/assets/styles/GlobalStyle';
import Login from '@/pages/Login';
import Components from '@/pages/Components';

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="components" element={<Components />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
