import styled from "styled-components";

import Logotype from "@components/etc/logotype";
import USER_IMAGE_LARGE from "@images/user-image-large.svg";

const StyledCustomHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const CustomHeader = ({ children }) => {
  return (
    <StyledCustomHeader>
      <Logotype componentSize={"medium"}>
        <span>{children}</span>
      </Logotype>
      <USER_IMAGE_LARGE />
    </StyledCustomHeader>
  );
};

export default CustomHeader;
