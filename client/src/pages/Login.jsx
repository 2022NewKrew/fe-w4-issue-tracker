import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { login, getUserInfo } from '@api';
import { useNavigate } from '@core/react-router-dom/useNavigate';
import { Button, Input, Logo } from '@components';
import { setLocalStorage } from '@utils';
import { userInfoSelector } from '../states';

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
    const [userId, setUserId] = useState('');
    const [userIdType, setUserIdType] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState(false);

    const [userInfo, setUserInfo] = useRecoilState(userInfoSelector);

    const chkUserIdAvailable = userId.length >= 6 && userId.length <= 16;
    const chkPasswordAvailable = password.length >= 6 && password.length <= 12;

    const navigate = useNavigate();

    const handleInputUserId = ({ target: { value } }) => {
        setUserId(value);

        if (value.length === 0) {
            setUserIdType(false);
            return;
        }
        setUserIdType(true);
    };

    const handleInputPassword = ({ target: { value } }) => {
        setPassword(value);

        if (value.length === 0) {
            setPasswordType(false);
            return;
        }
        setPasswordType(true);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            if (!chkUserIdAvailable) {
                throw new Error(
                    '아이디는 최소 6자리에서 16자리까지 입력할 수 있습니다.'
                );
            }

            if (!chkPasswordAvailable) {
                throw new Error(
                    '비밀번호는 최소 6자리에서 12자리까지 입력할 수 있습니다.'
                );
            }
            const {
                data: { loginSuccess, message, token },
            } = await login({
                email: userId,
                password: password,
            });
            if (!loginSuccess) {
                throw new Error(message);
            }
            setLocalStorage('token', token);
            navigate('/issue');
        } catch (e) {
            alert(e.message);
            console.error(e.message);
        }
    };

    const chkButtonCanClick = () => {
        if (chkUserIdAvailable && chkPasswordAvailable) {
            return true;
        }
        return false;
    };

    return (
        <Wrapper>
            <Logo large />
            <Button github>Github 계정으로 로그인</Button>
            <Separator>or</Separator>
            <form action="#" method="post" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    required
                    handleChange={handleInputUserId}
                    className={userIdType && 'type'}
                    large
                    label="아이디"
                />
                <Input
                    type="password"
                    required
                    handleChange={handleInputPassword}
                    className={passwordType && 'type'}
                    large
                    label="비밀번호"
                />
                <Button
                    type="submit"
                    large
                    disabled={chkButtonCanClick() ? false : true}
                >
                    아이디로 로그인
                </Button>
            </form>
            <Register>회원가입</Register>
        </Wrapper>
    );
}
