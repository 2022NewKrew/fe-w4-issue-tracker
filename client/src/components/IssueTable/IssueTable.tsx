import React, { useState, useReducer, ChangeEvent } from 'react';
import { useRecoilStateLoadable } from 'recoil';
import { allIssuesAtom } from '@atoms';
import styled from 'styled-components';
import { AlignXYCenter, TextSmall, RoundBorderDiv, TableData, Table } from '@styles/styleTemplates';
import { IIssue } from '@types';
import { IssueTableHeader, IssueRow } from '.';

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
    const [issueDatas] = useRecoilStateLoadable<IIssue[]>(allIssuesAtom);
    const [selectMode, setSelectMode] = useState(false);
    const [checkStatus, dispatch] = useReducer(checkStatusReducer, []);

    const renderTableData = (issueDatas: IIssue[], isFiltering = false) => {
        const NO_ISSUE_MESSAGE = '등록된 이슈가 없습니다';
        const NOTHING_FOUND_MESSAGE = '검색과 일치하는 결과가 없습니다';
        const onRowChangeHandler = (rowNumber: number) => () => {
            dispatch({
                type: 'CHECK',
                payload: { length: issueDatas.contents.length, rowNumber, setSelectMode },
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
                />
            ));
        if (isFiltering) return <EmptyRow>{NOTHING_FOUND_MESSAGE}</EmptyRow>;
        return <EmptyRow>{NO_ISSUE_MESSAGE}</EmptyRow>;
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
    if (issueDatas.state === 'hasValue')
        return (
            <TableContainer selectMode={selectMode}>
                <IssueTableHeader selectMode={selectMode} onChangeHandler={onHeaderChangeHandler} />
                {renderTableData(issueDatas.contents)}
            </TableContainer>
        );
    else return null;
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
