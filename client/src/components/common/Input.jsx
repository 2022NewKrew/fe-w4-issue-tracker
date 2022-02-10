import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    position: relative;
`;

const LargeInput = styled.input`
    ${({ theme }) => theme.basicInput}
    padding: 18px 24px;
    width: 292px;

    &.typing {
        padding: 30px 24px 6px 24px;
    }
`;

const LargeInputLabel = styled.label`
    ${({ theme }) => theme.basicInputLabel}
    top: 20px;

    &.typing {
        top: 8px;
    }

    ${(props) =>
        props.success &&
        css`
            color: #00a028;
        `}

    ${(props) =>
        props.error &&
        css`
            color: #c60b00;
        `}
`;

const SuccessText = styled.div`
    margin-top: 6px;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #00a028;
`;

const ErrorText = styled.div`
    margin-top: 6px;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #c60b00;
`;

const MediumInput = styled.input`
    ${({ theme }) => theme.basicInput}
    padding: 14px 24px;
    width: 272px;

    &.typing {
        padding: 26px 24px 2px 24px;
    }
`;

const MediumInputLabel = styled.label`
    ${({ theme }) => theme.basicInputLabel}
    top: 15px;

    &.typing {
        top: 4px;
    }
`;

export function Input({ label, ...inputProps }) {
    const { handleChange, large, medium, className } = inputProps;

    if (large) {
        return (
            <Wrapper>
                <LargeInputLabel className={className}>{label}</LargeInputLabel>
                <LargeInput {...inputProps} onChange={handleChange} />
                {/* {success && (
                    <SuccessText>사용 가능한 아이디입니다!</SuccessText>
                )}
                {error && (
                    <ErrorText>이미 사용하고 있는 아이디 입니다!</ErrorText>
                )} */}
            </Wrapper>
        );
    }

    if (medium) {
        return (
            <Wrapper>
                <MediumInputLabel className={className}>
                    {label}
                </MediumInputLabel>
                <MediumInput {...inputProps} onChange={handleChange} />
            </Wrapper>
        );
    }
}
