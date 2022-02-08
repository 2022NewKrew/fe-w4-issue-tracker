import styled from "styled-components";

import themeColors from "@styles/themes/theme-colors";
import themeGreyscale from "@styles/themes/theme-greyscale";

const StyledComponentContainer = styled.div`
  background: ${themeGreyscale.offWhite};
  border: 1px dashed ${themeColors.default};
  box-sizing: border-box;
  border-radius: 5px;
`;

const ComponentContainer = ({ children }) => {
  return (
    <StyledComponentContainer>
      <span>{children}</span>
    </StyledComponentContainer>
  );
};

export default ComponentContainer;
