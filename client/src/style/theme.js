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
    smallButton: css`
        &: before {
            content: '+';
            width: 16px;
            height: 16px;
            font-size: 22px;
            font-weight: 400;
            display: inline-block;
            vertical-align: top;
            margin-right: 4px;
        }
        padding: 10px 25px;
        width: 120px;
        border-radius: 11px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 700;
    `,
    textButton: css`
        &: before {
            content: '+';
            width: 16px;
            height: 16px;
            font-size: 22px;
            font-weight: 400;
            display: inline-block;
            vertical-align: top;
            margin-right: 4px;
        }
        color: #6e7191;
        font-weight: 700;
    `,
    basicInput: css`
        background-color: #eff0f6;
        border-radius: 16px;
        border: 0;
        font-size: 16px;
        line-height: 28px;
        font-weight: 700;
        color: #14142b;

        &: focus {
            background-color: #fefefe;
            border: 1px solid #14142b;
        }

        ${(props) =>
            props.disabled &&
            css`
                background-color: #eff0f6;
                opacity: 0.5;
            `}

        ${(props) =>
            props.success &&
            css`
                padding: 17px 23px;
                background-color: #ddffe6;
                border: 1px solid #34c759;
            `}
    
        ${(props) =>
            props.error &&
            css`
                padding: 17px 23px;
                background-color: #ffd1cf;
                border: 1px solid #ff3b30;
            `}
    `,
    basicInputLabel: css`
        position: absolute;
        left: 24px;
        font-size: 16px;
        line-height: 28px;
        font-weight: 500;
        color: #a0a3bd;
        transition: 0.2s all ease;

        &.type {
            font-size: 12px;
            line-height: 20px;
            color: #6e7191;
        }
    `,
};
