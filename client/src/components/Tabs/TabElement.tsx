import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { LinkSmall, TextSmall, SmallIcon } from '@styles/styleTemplates';
import { ITabElement } from '@types';

interface IProps {
    tabProperty: ITabElement;
    isLast: boolean;
}

export const TabElement = ({
    tabProperty: { icon, title, count, href },
    isLast = false,
}: IProps) => {
    return (
        <Link to={href}>
            <Tab isLast={isLast}>
                {icon}
                <TitleDiv>{title}</TitleDiv>
                <CountDiv>({count})</CountDiv>
            </Tab>
        </Link>
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
    ${SmallIcon('var(--label-color)')}
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
        ${SmallIcon('var(--body-color)')}
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
