import React from 'react';
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
                        <Routes>
                            <Route path="issue" element={<IssueDetailPage />} />
                            <Route path="issue/new/:id" element={<CreateIssuePage />} />
                            <Route path="issue/edit/:id" element={<EditIssuePage />} />
                            <Route path="issues" element={<IssueListPage />} />
                            <Route path="labels" element={<LabelListPage />} />
                            <Route path="milestones" element={<MilestoneListPage />} />
                            <Route path="*" element={<ErrorPage />} />
                            <Route path="/" element={<TempPage />} />
                        </Routes>
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
