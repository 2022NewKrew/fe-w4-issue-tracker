import React, { MouseEvent } from 'react';
import styled, { css } from 'styled-components';
import { LinkSmall, AlignYCenter } from '@styles/styleTemplates';
import { ReactComponent as DownArrow } from '@icons/DownArrow.svg';

interface IProps {
    title: string;
    onClickHandler: (e: MouseEvent<HTMLElement>) => void;
    className?: string;
    hover?: boolean;
}

export const FilterButton = ({ title, onClickHandler, className = '', hover = false }: IProps) => {
    return (
        <Wrapper onClick={onClickHandler} className={className} hover={hover}>
            <div>{title}</div>
            <DownArrow />
        </Wrapper>
    );
};

const Wrapper = styled.button<{ hover: boolean }>`
    ${LinkSmall}
    ${AlignYCenter}
    justify-content: space-between;
    min-width: fit-content;
    color: var(--label-color);
    cursor: pointer;

    ${({ hover }) => {
        if (hover)
            return css`
                &:hover {
                    color: var(--body-color);
                    background-color: var(--line-color);
                }
            `;
    }}
    & svg {
        padding: 6px 10px;
        path {
            stroke: var(--label-color);
        }
    }
`;
