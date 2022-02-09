import LoginLayout from "@templetes/LoginLayout";
import Atoms from "@UI/Atoms";
import { IDLoginForm } from "@UI/Organisms";

import Icon from "@UI/Icon";

const Login: React.FC = () => {
  return (
    <LoginLayout>
      <Icon name="logo_large" />
      <Atoms.Button size="large">GitHub 계정으로 로그인</Atoms.Button>
      <span>or</span>
      <IDLoginForm />
      <Atoms.Button size="small" shape="text" link="/issue">
        회원가입
      </Atoms.Button>
    </LoginLayout>
  );
};

export default Login;
