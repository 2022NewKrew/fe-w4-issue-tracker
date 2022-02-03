import styled from "styled-components";

import textMixin from "./text-mixin";
import { xSmallMixin } from "@styles/styles-mixin";

const StyledTextXSmall = styled.div`
  ${textMixin}
  ${xSmallMixin}
`;

const TextXSmall = ({ children }) => {
  return <StyledTextXSmall>{children}</StyledTextXSmall>;
};

export default TextXSmall;
