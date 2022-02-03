import styled from "styled-components";

import linkMixin from "./link-mixin";
import { mediumMixin } from "../../styles/styles-mixin";

const StyledLinkMedium = styled.a`
  ${linkMixin}
  ${mediumMixin}
`;

const LinkMedium = ({ children }) => {
  return <StyledLinkMedium>{children}</StyledLinkMedium>;
};

export default LinkMedium;
