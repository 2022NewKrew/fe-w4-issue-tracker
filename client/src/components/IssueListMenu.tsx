import React from 'react';
import styled from 'styled-components';
import { FilterBar, Tabs, Button } from './assets';

export const IssueListMenu = () => {
    return (
        <Wrapper>
            <FilterBar placeholder="Search all issues" onFocusPlaceholder="is:issue is:open" />
            <RightButtons>
                <Tabs />
                <EmptySpace />
                <Button innerText="이슈 작성" buttonType="small-standard" />
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

const EmptySpace = styled.div`
    width: 16px;
`;
