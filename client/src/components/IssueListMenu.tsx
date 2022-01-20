import React from 'react';
import styled from 'styled-components';
import { Filter } from './assets';

export const IssueListMenu = () => {
    return (
        <Wrapper>
            <Filter />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;
