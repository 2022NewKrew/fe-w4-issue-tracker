import styled, { css } from 'styled-components';

const BasicButton = styled.button`
    ${({ theme }) => theme.basicButton}
    &: hover {
        background-color: #004de3;
    }
    ${(props) =>
        props.large &&
        css`
            width: 340px;
            padding: 16px 24px;
            &: focus {
                border: 4px solid #c7ebff;
                padding: 12px 24px;
            }
        `}
    ${(props) =>
        props.medium_standard &&
        css`
            width: 240px;
            padding: 12px 24px;
            &: focus {
                border: 4px solid #c7ebff;
                padding: 8px 24px;
            }
        `}
`;

const BasicDisabledButton = styled.button`
    ${({ theme }) => theme.basicButton}
    cursor: default;
    opacity: 0.5;
    ${(props) =>
        props.large &&
        css`
            padding: 16px 24px;
            width: 340px;
        `}
    ${(props) =>
        props.medium_standard &&
        css`
            width: 240px;
            padding: 12px 24px;
        `}
`;

export function Button({ children, ...buttonProps }) {
    const {
        large,
        medium_standard,
        disabled,
        small_standard,
        small_secondary,
        medium_text,
        small_text,
    } = buttonProps;

    if ((large && disabled) || (medium_standard && disabled)) {
        return (
            <BasicDisabledButton {...buttonProps}>
                {children}
            </BasicDisabledButton>
        );
    }

    if (large || medium_standard) {
        return <BasicButton {...buttonProps}>{children}</BasicButton>;
    }

}
