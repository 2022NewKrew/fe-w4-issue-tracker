import { css } from 'styled-components';

export const theme = {
    clearFloat: css`
        content: '';
        display: block;
        clear: both;
    `,
    blindText: css`
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
    `,
    elip1: css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    `,
    multiElip(lineHeight, rowNum) {
        css`
            max-height: ${lineHeight * rowNum};
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: ${rowNum};
        `;
    },
    basicButton: css`
        background-color: #007aff;
        border-radius: 20px;
        font-weight: bold;
        font-size: 18px;
        line-height: 32px;
        color: #fefefe;
    `,
};
