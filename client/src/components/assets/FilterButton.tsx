import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { LinkSmall, AlignXYCenter } from '@styles/styleTemplates';
import { ReactComponent as DownArrow } from '@icons/DownArrow.svg';

interface IProps {
    title: string;
    onClickHandler: (e: MouseEvent<HTMLElement>) => void;
    className?: string;
}

export const FilterButton = ({ title, onClickHandler, className }: IProps) => {
    return (
        <Wrapper onClick={onClickHandler} className={className ? className : ''}>
            <div>{title}</div>
            <DownArrow />
        </Wrapper>
    );
};

const Wrapper = styled.button`
    ${LinkSmall}
    ${AlignXYCenter}
    min-width: 100px;
    color: var(--label-color);
    cursor: pointer;

    & svg {
        padding: 4px;
        path {
            stroke: var(--label-color);
        }
    }

    &:hover {
        color: var(--body-color);
        background-color: var(--line-color);
    }
`;
