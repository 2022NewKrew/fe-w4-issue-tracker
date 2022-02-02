import React, { useState } from 'react';
import styled from 'styled-components';
import { AlignXYCenter, TextSmall, RoundBorderDiv, TableData, Table } from '@styles/styleTemplates';
import { IIssue } from '@types';
import { IssueTableHeader, IssueRow } from '.';
import { getIssues } from '@apis';

const renderTableData = (issueDatas: IIssue[], selectMode: boolean, isFiltering = false) => {
    const NO_ISSUE_MESSAGE = '등록된 이슈가 없습니다';
    const NOTHING_FOUND_MESSAGE = '검색과 일치하는 결과가 없습니다';
    if (issueDatas.length > 0)
        return issueDatas.map((issue) => (
            <IssueRow issueData={issue} selectMode={selectMode} key={issue.id} />
        ));
    if (isFiltering) return <EmptyRow>{NOTHING_FOUND_MESSAGE}</EmptyRow>;
    return <EmptyRow>{NO_ISSUE_MESSAGE}</EmptyRow>;
};

export const IssueTable = () => {
    const [selectMode, setSelectMode] = useState(false);

    const { data, errorMsg } = getIssues();
    if (!!errorMsg) return <div>{errorMsg}</div>;
    return (
        <TableContainer selectMode={selectMode}>
            <IssueTableHeader selectMode={selectMode} />
            {renderTableData(data, selectMode)}
        </TableContainer>
    );
};

const TableContainer = styled(RoundBorderDiv)<{ selectMode: boolean }>`
    ${Table}
    grid-template-columns: 68px ${({ selectMode }) =>
        selectMode ? '1085px 1fr' : '790px auto auto auto auto'};
`;

const EmptyRow = styled.div`
    ${TableData}
    ${AlignXYCenter};
    ${TextSmall};
    color: var(--label-color);
    grid-column: 1 / -1;
    height: 100px;
`;
