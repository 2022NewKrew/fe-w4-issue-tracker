import React from 'react';
import { IssueListMenu, IssueTable } from '@components';

// TODO: 여기에도 nested router 추가해서 필터링시 url 바뀌게 하기
export const IssueListPage = () => {
    return (
        <>
            <IssueListMenu />
            <IssueTable />
        </>
    );
};
