import React, { MouseEvent } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { issuesFilterState, issueStatusCountSelector } from '@atoms';
import styled, { css } from 'styled-components';
import { LinkSmall, TableHeader, AlignXYCenter, SmallIcon } from '@styles/styleTemplates';
import { IFilter } from '@types';
import { IssueFilterButton } from '.';
import { ReactComponent as Alertcircle } from '@icons/AlertCircle.svg';
import { ReactComponent as Archive } from '@icons/Archive.svg';

interface IProps {
    selectMode: boolean;
    onChangeHandler: (e: FormEvent<HTMLInputElement>) => void;
}

const FilterTypes: IFilter[] = [
    { title: '담당자', type: 'assignee', emptyFilterOption: '담당자가 없는 이슈' },
    { title: '레이블', type: 'label', emptyFilterOption: '레이블이 없는 이슈' },
    { title: '마일스톤', type: 'milestone', emptyFilterOption: '마일스톤이 없는 이슈' },
    { title: '작성자', type: 'author' },
];

const renderFilterButton = (selectMode: boolean, FilterTypes: IFilter[]) => {
    if (selectMode)
        return (
            <IssueFilterButton
                filterProperty={{ title: '상태 수정', type: 'statusChange' }}
                isLast={true}
            />
        );
    return FilterTypes.map((filter: IFilter, i) => (
        <IssueFilterButton filterProperty={filter} key={i} isLast={i === FilterTypes.length - 1} />
    ));
};

export const IssueTableHeader = ({ selectMode, onChangeHandler }: IProps) => {
    const [openCount, closeCount] = useRecoilValue(issueStatusCountSelector);
    const [issueFilterState, setIssueFilterState] = useRecoilState(issuesFilterState);
    const filterOpen = () => setIssueFilterState('SHOW_OPEN');
    const filterClose = () => setIssueFilterState('SHOW_CLOSE');

    return (
        <>
            <Checkbox>
                <input type="checkbox" onChange={onChangeHandler} />
            </Checkbox>
            <IssueStatuses>
                <Status isActive={issueFilterState === 'SHOW_OPEN'} onClick={filterOpen}>
                    <Alertcircle />
                    열린 이슈({openCount})
                </Status>
                <Status isActive={issueFilterState === 'SHOW_CLOSE'} onClick={filterClose}>
                    <Archive />
                    닫힌 이슈({closeCount})
                </Status>
            </IssueStatuses>
            {renderFilterButton(selectMode, FilterTypes)}
        </>
    );
};

const Checkbox = styled.div`
    ${TableHeader}
    padding: 0 20px 0 32px;
    & input {
        width: 16px;
        height: 16px;
    }
    border-radius: 16px 0 0 0;
`;

const IssueStatuses = styled.div`
    ${TableHeader}
    line-height: normal;
`;

const Status = styled.button<{ isActive: boolean }>`
    ${AlignXYCenter}
    ${LinkSmall}
    padding: 12px;
    color: var(--label-color);
    ${SmallIcon('var(--label-color)', '4px')}
    cursor: pointer;
    ${({ isActive }) => {
        if (isActive)
            return css`
                color: var(--title-active-color);
                ${SmallIcon('var(--title-active-color)', '4px')}
            `;
    }}
`;
