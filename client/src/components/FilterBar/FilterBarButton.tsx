import React from 'react';
import styled from 'styled-components';
import { LinkSmall } from '@styles/styleTemplates';
import { ReactComponent as DownArrow } from '@icons/DownArrow.svg';

export const FilterBarButton = () => {
    const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
    };
    return (
        <Wrapper onClick={onClickHandler}>
            <div>필터</div>
            <DownArrow />
        </Wrapper>
    );
};

const Wrapper = styled.button`
    ${LinkSmall}
    color: var(--label-color);
    min-width: 128px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid var(--line-color);
    background-color: var(--background-color);
    padding: 0 24px;
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
