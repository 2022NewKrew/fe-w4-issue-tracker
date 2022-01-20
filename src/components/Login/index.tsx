import React from "react";
import styled from "styled-components";
import { color, githubLoginUrl } from "@/constant/constant";
const Login = () => {
  const githubLogin = () => {
    location.href = githubLoginUrl;
  };
  return (
    <Wrapper>
      <ListWrapper>
        <Title>Isuue Tracker</Title>
        <ButtonInput
          background={color.Black}
          type="button"
          value="GitHub 계정으로 로그인"
          onClick={githubLogin}
        />
        <Span>or</Span>
        <TextInput placeholder="아이디" />
        <TextInput placeholder="비밀번호" />
        <ButtonInput
          background={color.LightBlue}
          type="button"
          value="아이디로 로그인"
        />
        <Span>회원가입</Span>
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-top: 20vh;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  /* Logotype Large */
  font-family: Montserrat;
  font-style: italic;
  font-weight: normal;
  font-size: 56px;
  line-height: 72px;
  /* identical to box height, or 129% */
  letter-spacing: -0.04em;
  /* Greyscale / Title Active */
  color: #14142b;
  margin-bottom: 30px;
`;

const Input = styled.input`
  border: none;
  width: 292px;
  height: 64px;
  left: 550px;
  top: 504px;
  background: #eff0f6;
  border-radius: 16px;
  margin-top: 20px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
`;

const TextInput = styled(Input)`
  padding: 0 24px;
`;

const ButtonInput = styled(Input)<{ background: string }>`
  width: 340px;
  background: ${(props) => props.background || "white"};
  color: white;
  font-size: 18px;
`;

const Span = styled.span`
  /* Link Small */
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  color: #a0a3bd;
  margin-top: 20px;
`;
export default Login;
