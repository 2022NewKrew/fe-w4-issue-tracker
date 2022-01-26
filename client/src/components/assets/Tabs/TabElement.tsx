import React from 'react';
import styled, { css } from 'styled-components';
import { LinkSmall, TextSmall } from '@styles/styleTemplates';
import { ITabElement } from '@types';

export const TabElement = ({ icon, title, count, isLast }: ITabElement) => {
    return (
        <Tab isLast={isLast}>
            {icon}
            <TitleDiv>{title}</TitleDiv>
            <CountDiv>({count})</CountDiv>
        </Tab>
    );
};

const Tab = styled.button<{ isLast: boolean }>`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 40px;
    color: var(--label-color);
    cursor: pointer;
    & svg {
        width: 16px;
        height: 16px;
        path {
            stroke: var(--label-color);
        }
    }
    ${({ isLast }) => {
        if (!isLast)
            return css`
                border-right: 1px solid var(--line-color);
            `;
    }}

    &:hover {
        background-color: var(--input-background-color);
    }
    &:active {
        background-color: var(--line-color);
        color: var(--body-color);
        svg path {
            stroke: var(--body-color);
        }
    }
`;

const TitleDiv = styled.div`
    ${LinkSmall}
    line-height: normal;
    padding: 0 8px;
`;

const CountDiv = styled.div`
    ${TextSmall}
    line-height: normal;
`;
