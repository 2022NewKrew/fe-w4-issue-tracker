import styled from "styled-components";

import USER_IMAGE_LARGE from "@public/icons/user-image-large.svg";
import TypographyLogotype from "@styles/templates/typography-logotype";

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
