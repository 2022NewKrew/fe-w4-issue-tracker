import LoginLayout from "@components/Layout/LoginLayout";
import Button from "@components/common/Button";
import IDLoginForm from "@components/login/IDLoginForm";

import Icon from "@icon";

const Login: React.FC = () => {
  return (
    <LoginLayout>
      <Icon name="logo_large" />
      <Button size="large">GitHub 계정으로 로그인</Button>
      <span>or</span>
      <IDLoginForm />
      <Button size="small" type="text">
        회원가입
      </Button>
    </LoginLayout>
  );
};

export default Login;
