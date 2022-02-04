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

const SmallButton = styled.button`
    ${({ theme }) => theme.smallButton}
    ${(props) =>
        props.small_standard &&
        css`
            background-color: #007aff;
            color: #fefefe;
            &: hover {
                background-color: #004de3;
            }

            &: focus {
                padding: 6px 21px;
                border: 4px solid #c7ebff;
            }
        `}
    ${(props) =>
        props.small_secondary &&
        css`
            background-color: #fff;
            color: #007aff;
            border: 2px solid #007aff;
            padding: 8px 24px;
            &: hover {
                color: #004de3;
                border-color: #004de3;
            }

            &: focus {
                padding: 6px 22px;
                border: 4px solid #c7ebff;
            }
        `}
`;

const SmallDisabledButton = styled.button`
    ${({ theme }) => theme.smallButton}
    cursor: default;
    opacity: 0.5;
    ${(props) =>
        props.small_standard &&
        css`
            background-color: #007aff;
            color: #fefefe;
        `}
    ${(props) =>
        props.small_secondary &&
        css`
            background-color: #fff;
            color: #007aff;
            border: 2px solid #007aff;
            padding: 8px 24px;
        `}
`;

const TextButton = styled.button`
    ${({ theme }) => theme.textButton}
    &: active {
        color: #14142b;
    }
    &: hover {
        color: #4e4b66;
    }
    ${(props) =>
        props.medium_text &&
        css`
            width: 87px;
            font-size: 16px;
            line-height: 32px;
        `}
    ${(props) =>
        props.small_text &&
        css`
            width: 70px;
            font-size: 12px;
            line-height: 32px;
        `}
`;

const TextDisabledButton = styled.button`
    ${({ theme }) => theme.textButton}
    cursor: default;
    opacity: 0.5;
    ${(props) =>
        props.medium_text &&
        css`
            width: 87px;
            font-size: 16px;
            line-height: 32px;
        `}
    ${(props) =>
        props.small_text &&
        css`
            width: 70px;
            font-size: 12px;
            line-height: 32px;
        `}
`;

const GithubLoginButton = styled.button`
    ${({ theme }) => theme.basicButton}
    margin-top: 61px;
    width: 340px;
    padding: 16px 24px;
    background-color: #14142b;
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
        github,
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

    if ((small_standard && disabled) || (small_secondary && disabled)) {
        return (
            <SmallDisabledButton {...buttonProps}>
                {children}
            </SmallDisabledButton>
        );
    }

    if (small_standard || small_secondary) {
        return <SmallButton {...buttonProps}>{children}</SmallButton>;
    }

    if ((medium_text && disabled) || (small_text && disabled)) {
        return (
            <TextDisabledButton {...buttonProps}>{children}</TextDisabledButton>
        );
    }

    if (medium_text || small_text) {
        return <TextButton {...buttonProps}>{children}</TextButton>;
    }

    if (github) {
        return <GithubLoginButton>{children}</GithubLoginButton>;
    }
}
