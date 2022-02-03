import styled from "styled-components";

import linkMixin from "./link-mixin";
import { xSmallMixin } from "../../styles/styles-mixin";

const StyledLinkXSmall = styled.a`
  ${linkMixin}
  ${xSmallMixin}
`;

const LinkXSmall = ({ children }) => {
  return <StyledLinkXSmall>{children}</StyledLinkXSmall>;
};

export default LinkXSmall;
