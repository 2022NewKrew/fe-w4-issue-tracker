import styled from "styled-components";

import greyScale from "@styles/greyscale";
import { getFontSize, getLineHeight } from "@utils/helper";

const StyledText = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  color: ${greyScale.default};
  ${() => getFontSize}
  ${() => getLineHeight}
`;

const Text = ({ children, type }) => {
  return (
    <StyledText type={type}>
      <span>{children}</span>
    </StyledText>
  );
};

export default Text;
