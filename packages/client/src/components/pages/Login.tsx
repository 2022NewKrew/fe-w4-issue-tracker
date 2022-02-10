import LoginLayout from "@templetes/LoginLayout";
import Atoms from "@UI/Atoms";
import { IDLoginForm } from "@UI/Organisms";

import Icon from "@UI/Icon";
import { CustomButton } from "@UI/Molecules";

const Login: React.FC = () => {
  return (
    <LoginLayout>
      <Icon name="logo_large" />
      <CustomButton.GithubLoginButton />
      <span>or</span>
      <IDLoginForm />
      <CustomButton.SignupButton />
    </LoginLayout>
  );
};

export default Login;
