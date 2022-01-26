import React from 'react';
import styled from 'styled-components';
import { TableHeader, AlignXYCenter } from '@styles/styleTemplates';

import { ReactComponent as Alertcircle } from '@icons/AlertCircle.svg';
import { ReactComponent as Archive } from '@icons/Archive.svg';

interface IProps {
    selectMode: boolean;
}

export const IssueTableHeader = ({ selectMode }: IProps) => {
    return (
        <>
            <Checkbox>
                <input type="checkbox" />
            </Checkbox>
            <IssueStatuses>
                <Status>
                    <Alertcircle />
                    열린 이슈({2})
                </Status>
                <Status>
                    <Archive />
                    닫힌 이슈({0})
                </Status>
            </IssueStatuses>
            <IssueFilter>담당자</IssueFilter>
            <IssueFilter>레이블</IssueFilter>
            <IssueFilter>마일스톤</IssueFilter>
            <IssueFilter>작성자</IssueFilter>
        </>
    );
};

const Checkbox = styled.div`
    ${TableHeader}
    justify-content: center;
    & input {
        width: 16px;
        height: 16px;
    }
`;

const IssueStatuses = styled.div`
    ${TableHeader}
    line-height: normal;
    display: flex;
    padding: 0 4px;
`;

const Status = styled.div`
    ${AlignXYCenter}
    padding: 12px;
    & svg {
        padding-right: 4px;
    }
`;

const IssueFilter = styled.div`
    ${TableHeader}
    padding: 0 16px;
    width: 100%;
`;
