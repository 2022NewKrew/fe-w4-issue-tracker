import React from 'react';
import styled from 'styled-components';
import BigLogo from '@/assets/logo/LogotypeLarge.svg';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';

export default function Login() {
  const onClickLoginButton = () => {};

  return (
    <Wrapper>
      <BigLogo />
      <TextInput label={'로그인'} size={3} inputType={'text'} />
      <TextInput label={'비밀번호'} size={3} inputType={'password'} />
      <Button text="로그인" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  gap: 30px;
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
