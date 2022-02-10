import React from 'react';
import styled from 'styled-components';
import BigLogo from '@/assets/logo/LogotypeLarge.svg';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import { placeholderGS } from '@/assets/styles/Palette';

export default function Login() {
  const onClickGihubLoginButton = () => {};

  const onClickLoginButton = () => {
    alert('죄송합니다. 깃허브 로그인을 사용해주세요');
  };

  return (
    <Wrapper>
      <LoginBigLogo />
      <GithubLoginButton
        text="GitHub 계정으로 로그인"
        bgColor="black"
        onClick={onClickGihubLoginButton}
      />
      <Separator>or</Separator>
      <IDTextInput label={'로그인'} size={3} inputType={'text'} />
      <PasswordTextInput label={'비밀번호'} size={3} inputType={'password'} />
      <Button text="로그인" onClick={onClickLoginButton} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Separator = styled.div`
  font-weight: 700;
  margin-bottom: 24px;
  font-size: 16px;
  color: ${placeholderGS};
`;

const LoginBigLogo = styled(BigLogo)`
  margin-bottom: 61px;
`;

const IDTextInput = styled(TextInput)`
  margin-bottom: 16px;
`;

const PasswordTextInput = styled(TextInput)`
  margin-bottom: 16px;
`;

const GithubLoginButton = styled(Button)`
  margin-bottom: 24px;
`;
