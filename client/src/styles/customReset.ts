import { css } from 'styled-components';

export const customReset = css`
    input {
        outline: none;
        border: none;
        margin: 0;
    }
    input:focus {
        outline: none;
    }
    button {
        border: none;
        padding: 0;
        background-color: unset;
    }
`;
