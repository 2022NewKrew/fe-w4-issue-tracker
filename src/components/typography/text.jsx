import styled from "styled-components";

import { getFontSize, getLineHeight, getColor } from "@utils/helper";

const StyledText = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  ${() => getFontSize}
  ${() => getLineHeight}
  ${() => getColor}
`;

const Text = ({ children, type, color }) => {
  return (
    <StyledText type={type} color={color}>
      <span>{children}</span>
    </StyledText>
  );
};

export default Text;
