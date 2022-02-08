import styled from "styled-components";

import USER_IMAGE_LARGE from "@images/icons/user-image-large.svg";
import TypographyLogotype from "@styles/typography/typography-logotype";

const StyledHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

const HeaderContainer = ({ children }) => {
  return (
    <StyledHeaderContainer>
      <TypographyLogotype componentSize={"medium"}>
        <span>{children}</span>
      </TypographyLogotype>
      <USER_IMAGE_LARGE />
    </StyledHeaderContainer>
  );
};

export default HeaderContainer;
