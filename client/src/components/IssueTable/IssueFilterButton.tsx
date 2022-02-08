import React, { useState, MouseEvent } from 'react';
import styled from 'styled-components';
import { TableHeader, AlignXYCenter } from '@styles/styleTemplates';
import { IFilter } from '@types';
import { FilterButton } from '@components/assets';
import { IssueFilterDropdown } from '@components';

interface IProps {
    filterProperty: IFilter;
    isLast: boolean;
}

export const IssueFilterButton = ({ filterProperty, isLast }: IProps) => {
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
        <ButtonWrapper
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseLeaveHandler}
            isLast={isLast}
        >
            <DropButton title={filterProperty.title} onClickHandler={onClickHandler} />
            <IssueFilterDropdown dropdown={dropdown} filterProperty={filterProperty} />
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.div<{ isLast: boolean }>`
    ${TableHeader}
    position: relative;
    border-radius: ${({ isLast }) => (isLast ? '0 16px 0 0' : '0')};
`;

const DropButton = styled(FilterButton)`
    ${AlignXYCenter}
    padding-left: 16px;
    width: 100%;
`;
