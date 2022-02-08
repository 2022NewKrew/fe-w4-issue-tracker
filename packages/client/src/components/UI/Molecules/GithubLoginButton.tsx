import styled from "@emotion/styled";
import Atoms from "@UI/Atoms";

const GithubLoginButton = () => {
  return (
    <Wrapper>
      <Atoms.Button size="large">GitHub 계정으로 로그인</Atoms.Button>
    </Wrapper>
  );
};

export default GithubLoginButton;

const Wrapper = styled.div`
  & > .Button {
    background: #14142b;
    & > a {
      color: var(--offWhite);
    }
    :hover:enabled:not(:active),
    :active {
      background: #14142b;
      border: none;
    }
  }
`;
