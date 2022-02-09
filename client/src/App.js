import styled, { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import { Routes, Route } from '@core/react-router-dom';
import { Login, IssueList, NotFound } from '@pages';
import { GlobalStyle, theme } from '@style';
import React from 'react';

const Wrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;

export default function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <RecoilRoot>
                    <React.Suspense fallback={<div>Loading</div>}>
                        <Wrapper>
                            <Routes>
                                <Route path="/login" element={<Login />} />
                                <Route path="/issue" element={<IssueList />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Wrapper>
                    </React.Suspense>
                </RecoilRoot>
            </ThemeProvider>
        </>
    );
}
