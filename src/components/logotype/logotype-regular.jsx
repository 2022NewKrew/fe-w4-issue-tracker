import styled from "styled-components";

import logotypeMixin from "./logotype-mixin";

const StyledLogotypeRegular = styled.div`
  ${logotypeMixin}
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
`;

const LogotypeRegular = ({ children }) => {
  return <StyledLogotypeRegular>{children}</StyledLogotypeRegular>;
};

export default LogotypeRegular;
