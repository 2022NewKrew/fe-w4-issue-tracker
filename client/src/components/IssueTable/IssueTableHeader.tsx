import React, { MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import { issueListFilterState } from '@atoms';
import styled, { css } from 'styled-components';
import { LinkSmall, TableHeader, AlignXYCenter, SmallIcon } from '@styles/styleTemplates';
import { IFilter, IIssue } from '@types';
import { FilterButton } from '@components/assets';
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
    const onClickHandler = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        // TODO: 필터타입별로 options가 될 수 있는 리스트들을 fetch해와서 드롭다운으로 보여주기
    };
    if (selectMode) return <IssueFilterButton title="상태 수정" onClickHandler={onClickHandler} />;
    return FilterTypes.map(({ title, type }: IFilter) => (
        <IssueFilterButton title={title} onClickHandler={onClickHandler} key={type} />
    ));
};

export const IssueTableHeader = ({ selectMode, onChangeHandler }: IProps) => {
    const [issueFilterState, setIssueFilterState] = useRecoilState(issueListFilterState);
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
                    열린 이슈({2})
                </Status>
                <Status isActive={issueFilterState === 'SHOW_CLOSE'} onClick={filterClose}>
                    <Archive />
                    닫힌 이슈({0})
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

const IssueFilterButton = styled(FilterButton)`
    ${TableHeader}
    ${AlignXYCenter}
    padding-left: 16px;
    width: 100%;
`;
