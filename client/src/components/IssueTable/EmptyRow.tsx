import React from 'react';
import styled from 'styled-components';
import { AlignXYCenter, TextSmall, TableData } from '@styles/styleTemplates';

interface IProps {
    emptyType: 'none' | 'filter' | 'error';
}

export const EmptyRow = ({ emptyType }: IProps) => {
    const NO_ISSUE_MESSAGE = '등록된 이슈가 없습니다';
    const NOTHING_FOUND_MESSAGE = '검색과 일치하는 결과가 없습니다';
    const ERROR_OCCURED_MESSAGE = '에러가 발생했습니다';

    let message = '';
    switch (emptyType) {
        case 'none':
            message = NO_ISSUE_MESSAGE;
        case 'filter':
            message = NOTHING_FOUND_MESSAGE;
        case 'error':
            message = ERROR_OCCURED_MESSAGE;
    }
    return <EmptyRowStyle>{message}</EmptyRowStyle>;
};

const EmptyRowStyle = styled.div`
    ${TableData}
    ${AlignXYCenter};
    ${TextSmall};
    color: var(--label-color);
    grid-column: 1 / -1;
    height: 100px;
`;
