import styled from "styled-components";

import textMixin from "./text-mixin";
import { mediumMixin } from "@styles/styles-mixin";

const StyledTextMedium = styled.div`
  ${textMixin}
  ${mediumMixin}
`;

const TextMedium = ({ children }) => {
  return <StyledTextMedium>{children}</StyledTextMedium>;
};

export default TextMedium;
