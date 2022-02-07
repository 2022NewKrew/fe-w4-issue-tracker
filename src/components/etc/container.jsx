import styled from "styled-components";

import colors from "@styles/colors";
import greyscale from "@styles/greyscale";

const StyledContainer = styled.div`
  background: ${greyscale.offWhite};
  border: 1px dashed ${colors.default};
  box-sizing: border-box;
  border-radius: 5px;
`;

const Container = ({ children }) => {
  return (
    <StyledContainer>
      <span>{children}</span>
    </StyledContainer>
  );
};

export default Container;
