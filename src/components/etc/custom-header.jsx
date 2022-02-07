import Logotype from "@components/etc/logotype";
// import { USER_IMAGE_LARGE } from "@utils/image-helper";
import { ReactComponent as USER_IMAGE_LARGE } from "@images/user-image-large.svg";

const CustomHeader = ({ children }) => {
  return (
    <header>
      <Logotype customType="medium">
        <span>{children}</span>
      </Logotype>
    </header>
  );
};

export default CustomHeader;
