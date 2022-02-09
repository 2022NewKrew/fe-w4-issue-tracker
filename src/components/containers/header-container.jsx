import styled from "styled-components";

import USER_IMAGE_LARGE from "@public/icons/user-image-large.svg";
import TemplateContainer from "@components/containers/template-container";
import sizes from "@styles/constants/sizes";

const StyledHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 1440px;
  height: 94px;
  left: 0px;
  top: 0px;
  padding: 27px 80px 0px 80px;
`;

const HeaderContainer = ({ children }) => {
  return (
    <StyledHeaderContainer>
      <TemplateContainer componentSize={sizes.LOGOTYPE_MEDIUM}>
        <span>{children}</span>
      </TemplateContainer>
      <USER_IMAGE_LARGE />
    </StyledHeaderContainer>
  );
};

export default HeaderContainer;
