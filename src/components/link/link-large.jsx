import styled from "styled-components";

import linkMixin from "./link-mixin";
import { largeMixin } from "../../styles/styles-mixin";

const StyledLinkLarge = styled.a`
  ${linkMixin}
  ${largeMixin}
`;

const LinkLarge = ({ children }) => {
  return <StyledLinkLarge>{children}</StyledLinkLarge>;
};

export default LinkLarge;
