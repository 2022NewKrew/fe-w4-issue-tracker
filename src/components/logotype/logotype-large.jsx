import styled from "styled-components";

import logotypeMixin from "./logotype-mixin";

const StyledLogotypeLarge = styled.div`
  ${logotypeMixin}
  font-weight: normal;
  font-size: 56px;
  line-height: 72px;
`;

const LogotypeLarge = ({ children }) => {
  return <StyledLogotypeLarge>{children}</StyledLogotypeLarge>;
};

export default LogotypeLarge;
