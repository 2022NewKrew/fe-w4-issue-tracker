import React from 'react';
import styled from 'styled-components';
import { FilterBar, Tabs } from './assets';

export const IssueListMenu = () => {
    return (
        <Wrapper>
            <FilterBar />
            <RightButtons>
                <Tabs />
            </RightButtons>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const RightButtons = styled.div`
    display: flex;
`;
