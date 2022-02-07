import React, { useState, MouseEvent } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { userInfoAtom, labelInfoAtom, milestoneInfoAtom } from '@atoms';
import styled from 'styled-components';
import {
    TableHeader,
    AlignXYCenter,
    RoundBorderDiv,
    TextMedium,
    AlignYCenter,
    TextSmall,
} from '@styles/styleTemplates';
import { IFilter, issueFilterType, IFilterInfo } from '@types';
import { FilterButton } from '@components/assets';

interface IProps {
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
        default:
            throw Error('no match filter type');
    }
};

const renderOptions = ({ name }: IFilterInfo, index: number) => {
    return <Option key={index}>{name}</Option>;
};

const renderDropdown = (dropdown: boolean, filterProperty: IFilter) => {
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

export const IssueFilterButton = ({ filterProperty }: IProps) => {
    const [dropdown, setDropdown] = useState(false);
    const onClickHandler = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
    };
    const onMouseOverHandler = () => {
        setDropdown(true);
    };
    const onMouseLeaveHandler = () => {
        setDropdown(false);
    };

    return (
        <ButtonWrapper onMouseOver={onMouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
            <DropButton title={filterProperty.title} onClickHandler={onClickHandler} />
            {renderDropdown(dropdown, filterProperty)}
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.div`
    ${TableHeader}
    position: relative;
`;

const DropButton = styled(FilterButton)`
    ${AlignXYCenter}
    padding-left: 16px;
    width: 100%;
`;

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
