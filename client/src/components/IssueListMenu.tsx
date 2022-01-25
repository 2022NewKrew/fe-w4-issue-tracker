import React from 'react';
import styled from 'styled-components';
import { FilterBar } from './assets';

export const IssueListMenu = () => {
    return (
        <Wrapper>
            <FilterBar />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;
