import styled from "styled-components";

import linkMixin from "./link-mixin";
import { smallMixin } from "../../styles/styles-mixin";

const StyledLinkSmall = styled.a`
  ${linkMixin}
  ${smallMixin}
`;

const LinkSmall = ({ children }) => {
  return <StyledLinkSmall>{children}</StyledLinkSmall>;
};

export default LinkSmall;
