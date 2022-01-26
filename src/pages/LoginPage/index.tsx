/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import Icon from '@icon';
import Button from '@components/Button';
import { theme } from '@styles/theme';
import TextInput from '@components/TextInput';

const LoginPage = () => {
  const handleGithubLogin = () => {
    alert('깃헙 로그인 기능은 준비 중에 있습니다');
  };

  const handleCustomLogin = () => {
    alert('로그인 기능은 준비 중에 있습니다');
  };

  const handleJoin = () => {
    alert('회원가입 기능은 준비 중에 있습니다');
  };

  return (
    <div css={RootStyle}>
      <div css={WrapperStyle}>
        <Icon icon="LogotypeLarge" size={'340px'} />
        <Button type="Large" css={LoginButtonStyle} onClick={handleGithubLogin}>
          GitHub 계정으로 로그인
        </Button>
        <div css={[linkSmall, { color: placeHolder }]}>or</div>
        <TextInput type="text" size="large" placeholder="아이디" css={{ margin: '24px 0 16px' }} />
        <TextInput type="password" size="large" placeholder="비밀번호" />
        <Button type="Large" onClick={handleCustomLogin} css={{ margin: '24px 0 30px' }}>
          아이디로 로그인
        </Button>
        <Button type="SmallText" onClick={handleJoin}>
          회원가입
        </Button>
      </div>
    </div>
  );
};

const { linkSmall } = theme.textStyles;
const { titleActive, placeHolder, background } = theme.greyScale;

const LoginButtonStyle = css`
  margin: 61px 0 24px;
  background: ${titleActive};
  &:hover:enabled {
    background: ${titleActive};
  }
`;

const RootStyle = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${background};
`;

const WrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LoginPage;
