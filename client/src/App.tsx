import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Styled from 'styled-components';
import { Header } from './components';
import {
    IssueListPage,
    IssueDetailPage,
    CreateIssuePage,
    EditIssuePage,
    LabelListPage,
    MilestoneListPage,
    ErrorPage,
    TempPage,
} from './components/pages';

const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Wrapper>
                    <Header />
                    <RecoilRoot>
                        <ErrorBoundary FallbackComponent={ErrorPage}>
                            <Routes>
                                <Route path="issue" element={<IssueDetailPage />} />
                                <Route path="newissue/:id" element={<CreateIssuePage />} />
                                <Route path="editissue/:id" element={<EditIssuePage />} />
                                <Route path="issuelist" element={<IssueListPage />} />
                                <Route path="labellist" element={<LabelListPage />} />
                                <Route path="milestonelist" element={<MilestoneListPage />} />
                                <Route path="/" element={<TempPage />} />
                            </Routes>
                        </ErrorBoundary>
                    </RecoilRoot>
                </Wrapper>
            </Container>
        </BrowserRouter>
    );
};

const Container = Styled.div`
    display: flex;
    justify-content: center;
`;

const Wrapper = Styled.div`
    width: 1280px;
`;

export default App;
