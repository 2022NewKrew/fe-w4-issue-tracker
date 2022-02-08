import React from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { userInfoAtom, labelInfoAtom, milestoneInfoAtom, statusInfoAtom } from '@atoms';
import styled from 'styled-components';
import { RoundBorderDiv, TextMedium, AlignYCenter, TextSmall } from '@styles/styleTemplates';
import { IFilter, issueFilterType, IFilterInfo } from '@types';

interface IProps {
    dropdown: boolean;
    filterProperty: IFilter;
}

const getFilterAtom = (type: issueFilterType) => {
    switch (type) {
        case 'assignee':
            return userInfoAtom;
        case 'label':
            return labelInfoAtom;
        case 'milestone':
            return milestoneInfoAtom;
        case 'author':
            return userInfoAtom;
        case 'statusChange':
            return statusInfoAtom;
        default:
            throw Error('no match filter type');
    }
};

const renderOptions = ({ id, name }: IFilterInfo, index: number) => {
    return <Option key={id}>{name}</Option>;
};

export const IssueFilterDropdown = ({ dropdown, filterProperty }: IProps) => {
    const { title, type, emptyFilterOption } = filterProperty;
    const optionsAtom = getFilterAtom(type);
    const optionsData = useRecoilValueLoadable<IFilterInfo[]>(optionsAtom);

    let optionsIncludeEmptyFilterOption: IFilterInfo[] = emptyFilterOption
        ? [{ id: -1, name: emptyFilterOption }]
        : [];
    if (optionsData.state === 'hasValue')
        optionsIncludeEmptyFilterOption = [
            ...optionsIncludeEmptyFilterOption,
            ...optionsData.contents,
        ];

    if (!dropdown) return null;
    return (
        <DropWrapper>
            <FilterTitle>{`${title} 필터`}</FilterTitle>
            {optionsIncludeEmptyFilterOption.map((optionData: IFilterInfo, i) =>
                renderOptions(optionData, i)
            )}
        </DropWrapper>
    );
};

const DropWrapper = styled(RoundBorderDiv)`
    position: absolute;
    top: 50px;
    right: 0px;
    width: 240px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    background-color: var(--off-white-color);
    & > div {
        ${AlignYCenter}
        padding-left: 16px;
    }
`;

const FilterTitle = styled.div`
    ${TextMedium}
    height: 48px;
    background-color: var(--background-color);
`;

const Option = styled.div`
    ${TextSmall}
    height: 44px;
    border-top: 1px solid var(--line-color);
    cursor: pointer;
`;
