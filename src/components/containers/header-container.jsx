import styled from "styled-components";

import USER_IMAGE_LARGE from "@images/icons/user-image-large.svg";
import Logotype from "@styles/typography/logotype";

const StyledHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

const HeaderContainer = ({ children }) => {
  return (
    <StyledHeaderContainer>
      <Logotype componentSize={"medium"}>
        <span>{children}</span>
      </Logotype>
      <USER_IMAGE_LARGE />
    </StyledHeaderContainer>
  );
};

export default HeaderContainer;
