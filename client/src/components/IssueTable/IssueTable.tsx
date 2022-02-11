import React, { useState, useReducer, ChangeEvent } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { issueFilterSelector } from '@atoms';
import styled from 'styled-components';
import { Table } from '@styles/styleTemplates';
import { IIssue } from '@types';
import { IssueTableHeader, IssueRow, EmptyRow } from '.';

type CheckAction =
    | {
          type: 'CHECK_ALL';
          payload: {
              length: number;
              newStatus: boolean;
              setSelectMode: React.Dispatch<React.SetStateAction<boolean>>;
          };
      }
    | {
          type: 'CHECK';
          payload: {
              length: number;
              rowNumber: number;
              setSelectMode: React.Dispatch<React.SetStateAction<boolean>>;
          };
      };

const checkStatusReducer = (state: boolean[], action: CheckAction): boolean[] => {
    if (state.length === 0) state = Array(action.payload.length).fill(false);
    switch (action.type) {
        case 'CHECK_ALL':
            action.payload.setSelectMode(action.payload.newStatus);
            return state.map((_) => action.payload.newStatus);
        case 'CHECK':
            const { rowNumber, setSelectMode } = action.payload;
            const newState = [...state];
            newState[rowNumber] = !newState[rowNumber];
            if (newState.filter((status) => status).length > 0) setSelectMode(true);
            else setSelectMode(false);
            return newState;
        default:
            throw Error;
    }
};

export const IssueTable = () => {
    const issueDatas = useRecoilValueLoadable<IIssue[]>(issueFilterSelector);
    const [selectMode, setSelectMode] = useState(false);
    const [checkStatus, dispatch] = useReducer(checkStatusReducer, []);

    const renderTableData = (issueDatas: IIssue[], isFiltering = false) => {
        const onRowChangeHandler = (rowNumber: number) => () => {
            dispatch({
                type: 'CHECK',
                payload: { length: issueDatas.length, rowNumber, setSelectMode },
            });
        };

        if (issueDatas.length > 0)
            return issueDatas.map((issue, i) => (
                <IssueRow
                    issueData={issue}
                    checkStatus={checkStatus[i]}
                    selectMode={selectMode}
                    key={issue.id}
                    onChangeHandler={onRowChangeHandler(i)}
                    isLast={i === issueDatas.length - 1}
                />
            ));
        if (isFiltering) return <EmptyRow emptyType="filter" />;
        return <EmptyRow emptyType="none" />;
    };

    const onHeaderChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'CHECK_ALL',
            payload: {
                length: issueDatas.contents.length,
                newStatus: e.target.checked,
                setSelectMode: setSelectMode,
            },
        });
    };
    // [TODO] fallback을 state타입별로 다르게 줄 수 있는지 알아보기
    return (
        <React.Suspense fallback={<EmptyRow emptyType="error" />}>
            <TableContainer selectMode={selectMode}>
                <IssueTableHeader selectMode={selectMode} onChangeHandler={onHeaderChangeHandler} />
                {renderTableData(issueDatas.contents)}
            </TableContainer>
        </React.Suspense>
    );
};

const TableContainer = styled.div<{ selectMode: boolean }>`
    ${Table}
    border: 1px solid var(--line-color);
    border-radius: 16px;
    grid-template-columns: 68px ${({ selectMode }) =>
            selectMode ? '1085px 1fr' : '790px auto auto auto auto'};
`;
