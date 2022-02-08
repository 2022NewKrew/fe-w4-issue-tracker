import styled from "styled-components";

import TemplateContainer from "@components/containers/template-container";
import USER_IMAGE_LARGE from "@public/icons/user-image-large.svg";

const StyledHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

const HeaderContainer = ({ children }) => {
  return (
    <StyledHeaderContainer>
      <TemplateContainer componentType={"logotypeMedium"}>
        <span>{children}</span>
      </TemplateContainer>
      <USER_IMAGE_LARGE />
    </StyledHeaderContainer>
  );
};

export default HeaderContainer;
