import React from 'react';
import styled from 'styled-components';
import { Link, Routes, Route } from '@core/react-router-dom';
import { Test, User, NotFound } from '@components';

export default function App() {
    return (
        <>
            <Link to="/test1">test1</Link>
            <Link to="/test2">test2</Link>
            <Link to="/test9">test_not_found_page</Link>
            <Routes>
                <Route path="/" element={<Test />} />
                <Route path="/test1" element={<Test />} />
                <Route path="/test2/:id" element={<User />} />
                <Route path="/test3" element={<Test />} />
                <Route path="/test4" element={<Test />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
