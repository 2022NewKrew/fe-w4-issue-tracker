import styled, { css } from 'styled-components';
import { LinkSmall } from '.';

/* Styled Components */

export const RoundBorderDiv = styled.div`
    box-sizing: border-box;
    border-radius: 11px;
    border: 1px solid var(--line-color);
    display: flex;
    overflow: hidden;
`;

export const TableRowDiv = styled.div`
    background-color: var(--off-white-color);
    border-top: 1px solid var(--line-color);
`;

/* Style */

export const AlignXCenter = css`
    display: flex;
    justify-content: center;
`;

export const AlignYCenter = css`
    display: flex;
    align-items: center;
`;

export const AlignXYCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TableHeader = css`
    background-color: var(--background-color);
    height: 64px;
    ${AlignYCenter}
    ${LinkSmall}
    color: var(--label-color);
    & svg path {
        stroke: var(--label-color);
    }
`;
