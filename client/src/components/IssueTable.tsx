import React, { useState } from 'react';
import styled from 'styled-components';
import { AlignXYCenter, TextSmall } from '@styles/styleTemplates';
import { RoundBorderDiv, TableRowDiv } from '@styles/styleTemplates';
import { IIssue } from '@types';
import { IssueTableHeader } from '.';
import { IssueRow } from '@components/IssueRow';

const renderTableData = (issueDatas: IIssue[], isFiltering = false) => {
    const NO_ISSUE_MESSAGE = '등록된 이슈가 없습니다';
    const NOTHING_FOUND_MESSAGE = '검색과 일치하는 결과가 없습니다.';
    if (issueDatas.length > 0)
        return issueDatas.map((issue) => <IssueRow issueData={issue} key={issue.id} />);
    if (isFiltering) return <EmptyRow>{NOTHING_FOUND_MESSAGE}</EmptyRow>;
    return <EmptyRow>{NO_ISSUE_MESSAGE}</EmptyRow>;
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
        id: 1,
        title: 'FE 이슈트래커 개발',
        status: 'open',
        userId: 0,
        timeStamp: 1643206176368,
    },
    {
        id: 2,
        title: '닫힌 이슈',
        status: 'close',
        userId: 0,
        timeStamp: 1643206233139,
    },
];

export const IssueTable = () => {
    const [selectMode, setSelectMode] = useState(true);
    return (
        <Table selectMode={selectMode}>
            <IssueTableHeader selectMode={selectMode} />
            {renderTableData(dummyData)}
        </Table>
    );
};

const Table = styled(RoundBorderDiv)<{ selectMode: boolean }>`
    display: grid;
    grid-template-columns: 48px ${({ selectMode }) =>
            selectMode ? '1085px 1fr' : '790px auto auto auto auto'};
`;

const EmptyRow = styled(TableRowDiv)`
    ${AlignXYCenter};
    ${TextSmall};
    color: var(--label-color);
    grid-column: 1 / -1;
    height: 100px;
`;
