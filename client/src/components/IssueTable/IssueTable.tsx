import React, { useState, useReducer, ChangeEvent } from 'react';
import styled from 'styled-components';
import { AlignXYCenter, TextSmall, RoundBorderDiv, TableData, Table } from '@styles/styleTemplates';
import { IIssue } from '@types';
import { IssueTableHeader, IssueRow } from '.';
import { getIssues } from '@apis';

type Action =
    | { type: 'CHECK_ALL'; payload: { length: number; newStatus: boolean } }
    | { type: 'CHECK'; rowNumber: number };

const checkStatusReducer = (state: boolean[], action: Action): boolean[] => {
    switch (action.type) {
        case 'CHECK_ALL':
            const { length, newStatus } = action.payload;
            return Array(length).fill(newStatus);
        case 'CHECK':
            const newState = [...state];
            newState[action.rowNumber] = !newState[action.rowNumber];
            return newState;
        default:
            return state;
    }
};

const renderTableData = (
    issueDatas: IIssue[],
    checkStatus: boolean[],
    selectMode: boolean,
    dispatch: React.Dispatch<any>,
    isFiltering = false
) => {
    const NO_ISSUE_MESSAGE = '등록된 이슈가 없습니다';
    const NOTHING_FOUND_MESSAGE = '검색과 일치하는 결과가 없습니다';
    if (issueDatas.length > 0)
        return issueDatas.map((issue, i) => (
            <IssueRow
                issueData={issue}
                checkStatus={checkStatus[i]}
                selectMode={selectMode}
                key={issue.id}
                onChangeHandler={() => dispatch({ type: 'CHECK', rowNumber: i })}
            />
        ));
    if (isFiltering) return <EmptyRow>{NOTHING_FOUND_MESSAGE}</EmptyRow>;
    return <EmptyRow>{NO_ISSUE_MESSAGE}</EmptyRow>;
};

export const IssueTable = () => {
    const { data, errorMsg } = getIssues();
    const [selectMode, setSelectMode] = useState(false);

    const [checkStatus, dispatch] = useReducer(checkStatusReducer, []);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHECK_ALL',
            payload: { length: data.length, newStatus: e.target.checked },
        });
    };

    if (!!errorMsg) return <div>{errorMsg}</div>;
    return (
        <TableContainer selectMode={selectMode}>
            <IssueTableHeader selectMode={selectMode} onChangeHandler={onChangeHandler} />
            {renderTableData(data, checkStatus, selectMode, dispatch)}
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
