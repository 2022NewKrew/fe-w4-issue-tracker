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

const TypographyText = ({ children, componentSize, componentColor }) => {
  return (
    <StyledText componentSize={componentSize} componentColor={componentColor}>
      <span>{children}</span>
    </StyledText>
  );
};

export default TypographyText;
