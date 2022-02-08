import styled from "styled-components";

import colors from "@styles/theme/colors";
import greyscale from "@styles/theme/greyscale";

const StyledComponentContainer = styled.div`
  background: ${greyscale.offWhite};
  border: 1px dashed ${colors.default};
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
