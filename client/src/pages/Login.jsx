import styled from 'styled-components';
import { Button, Logo, LoginForm } from '@components';

const Wrapper = styled.div`
    margin: 0 auto;
    padding: 231px 0;
    width: 340px;

    form {
        > :nth-child(2) {
            margin: 16px 0;
        }
    }
`;

const Separator = styled.div`
    font-size: 16px;
    line-height: 28px;
    color: #a0a3bd;
    text-align: center;
    margin: 24px 0;
`;

const Register = styled.button`
    margin-top: 30px;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    color: #4e4b66;
    width: 100%;
`;

export function Login() {
    return (
        <Wrapper>
            <Logo large />
            <Button github>Github 계정으로 로그인</Button>
            <Separator>or</Separator>
            <LoginForm />
            <Register>회원가입</Register>
        </Wrapper>
    );
}
