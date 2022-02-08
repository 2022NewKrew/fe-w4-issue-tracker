import styled from "styled-components";

import colors from "@styles/constants/colors";
import greyscale from "@styles/constants/greyscale";
import numbers from "@styles/constants/numbers";

const StyledComponentContainer = styled.div`
  background: ${greyscale.OFF_WHITE};
  border: ${numbers.COMPONENT_CONTAINER_BORDER_WIDTH} dashed ${colors.DEFAULT};
  box-sizing: border-box;
  border-radius: ${numbers.COMPONENT_CONTAINER_BORDER_RADIUS};
`;

const ComponentContainer = ({ children }) => {
  return (
    <StyledComponentContainer>
      <span>{children}</span>
    </StyledComponentContainer>
  );
};

export default ComponentContainer;
