import styled from "styled-components";

import displayMixin from "./display-mixin";

const StyledDisplayBold = styled.div`
  ${displayMixin}
  font-weight: bold;
`;

const DisplayBold = ({ children }) => {
  return <StyledDisplayBold>{children}</StyledDisplayBold>;
};

export default DisplayBold;
