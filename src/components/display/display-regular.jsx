import styled from "styled-components";

import displayMixin from "./display-mixin";

const StyledDisplayRegular = styled.div`
  ${displayMixin}
  font-weight: normal;
`;

const DisplayRegular = ({ children }) => {
  return <StyledDisplayRegular>{children}</StyledDisplayRegular>;
};

export default DisplayRegular;
