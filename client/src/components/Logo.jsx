import styled, { css } from 'styled-components';

const Wrapper = styled.h1`
    ${({ large }) =>
        large &&
        css`
            background: url('/assets/img/logotypelarge.svg') no-repeat;
            width: 343px;
            height: 72px;
        `}

    ${({ medium }) =>
        medium &&
        css`
            background: url('/assets/img/logotypemedium.svg') no-repeat;
            width: 200px;
            height: 40px;
        `}
`;

const LogoText = styled.span`
    ${({ theme }) => theme.blindText}
`;

export function Logo(props) {
    return (
        <Wrapper {...props}>
            <LogoText>이슈 트랙커</LogoText>
        </Wrapper>
    );
}
