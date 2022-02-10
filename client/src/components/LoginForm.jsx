import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { login, getUserInfo } from '@api';
import { useNavigate } from '@core/react-router-dom/useNavigate';
import { Button, Input } from '@components';
import { userInfoSelector } from '@states';
import { setLocalStorage } from '@utils';

export function LoginForm() {
    const [userId, setUserId] = useState('');
    const [userIdType, setUserIdType] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState(false);

    const setUserInfo = useSetRecoilState(userInfoSelector);

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

            const { data } = await getUserInfo();
            setUserInfo({ ...data });
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
        <form action="#" method="post" onSubmit={handleSubmit}>
            <Input
                type="text"
                required
                handleChange={handleInputUserId}
                className={userIdType && 'typing'}
                largeInput
                label="아이디"
            />
            <Input
                type="password"
                required
                handleChange={handleInputPassword}
                className={passwordType && 'typing'}
                largeInput
                label="비밀번호"
            />
            <Button type="submit" large disabled={!chkButtonCanClick()}>
                아이디로 로그인
            </Button>
        </form>
    );
}
