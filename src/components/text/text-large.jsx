import styled from "styled-components";

import textMixin from "./text-mixin";
import { largeMixin } from "@styles/styles-mixin";

const StyledTextLarge = styled.div`
  ${textMixin}
  ${largeMixin}
`;

const TextLarge = ({ children }) => {
  return <StyledTextLarge>{children}</StyledTextLarge>;
};

export default TextLarge;
