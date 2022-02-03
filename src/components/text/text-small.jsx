import styled from "styled-components";

import textMixin from "./text-mixin";
import { smallMixin } from "@styles/styles-mixin";

const StyledTextSmall = styled.div`
  ${textMixin}
  ${smallMixin}
`;

const TextSmall = ({ children }) => {
  return <StyledTextSmall>{children}</StyledTextSmall>;
};

export default TextSmall;
