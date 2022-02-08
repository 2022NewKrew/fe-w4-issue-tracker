import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { Routes, Route } from '@core/react-router-dom';
import { Login, IssueList, NotFound } from '@pages';
import { GlobalStyle, theme } from '@style';
import React from 'react';

export default function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <RecoilRoot>
                    <React.Suspense fallback={<div>Loading</div>}>
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/issue" element={<IssueList />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </React.Suspense>
                </RecoilRoot>
            </ThemeProvider>
        </>
    );
}
