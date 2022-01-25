import React from 'react';
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
} from './components/pages';

const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Wrapper>
                    <Header />
                    <Routes>
                        <Route path="issue" element={<IssueDetailPage />} />
                        <Route path="issue/new:id" element={<CreateIssuePage />} />
                        <Route path="issue/edit:id" element={<EditIssuePage />} />
                        <Route path="issue_list" element={<IssueListPage />} />
                        <Route path="label_list" element={<LabelListPage />} />
                        <Route path="milestone_list" element={<MilestoneListPage />} />
                    </Routes>
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
