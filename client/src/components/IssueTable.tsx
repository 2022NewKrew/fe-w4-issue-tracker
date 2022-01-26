import React, { useState } from 'react';

import styled from 'styled-components';
import { AlignXYCenter, TextSmall } from '@styles/styleTemplates';
import { RoundBorderDiv, TableHeader, TableRowDiv } from '@styles/styleTemplates';

import { IIssue } from '@types';

import { IssueTableHeader } from '.';
import { IssueRow } from '@components/IssueRow';

const renderTableData = (issueDatas: IIssue[]) => {
    const NO_ISSUE_STRING = '등록된 이슈가 없습니다';
    if (issueDatas.length === 0) return <EmptyRow>{NO_ISSUE_STRING}</EmptyRow>;

    return issueDatas.map((issue) => <IssueRow issueData={issue} />);
};

const dummyData: IIssue[] = [
    {
        id: 0,
        title: '이슈 제목',
        status: 'open',
        userId: 0,
        timeStamp: 1643205903698,
    },
    {
        id: 0,
        title: 'FE 이슈트래커 개발',
        status: 'open',
        userId: 0,
        timeStamp: 1643206176368,
    },
    {
        id: 0,
        title: '닫힌 이슈',
        status: 'close',
        userId: 0,
        timeStamp: 1643206233139,
    },
];

export const IssueTable = () => {
    const [selectMode, setSelectMode] = useState(false);
    return (
        <Table selectMode={selectMode}>
            <IssueTableHeader selectMode={selectMode} />
            {renderTableData([])}
        </Table>
    );
};

const Table = styled(RoundBorderDiv)<{ selectMode: boolean }>`
    display: grid;
    grid-template-columns: 48px ${({ selectMode }) => (selectMode ? '1085px 1fr' : '790px 1fr 1fr 1fr 1fr')};
`;

const EmptyRow = styled(TableRowDiv)`
    ${AlignXYCenter};
    ${TextSmall};
    color: var(--label-color);
    grid-column: 1 / -1;
`;
