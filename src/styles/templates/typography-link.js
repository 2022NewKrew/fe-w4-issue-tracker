import styled from "styled-components";

import { getFontSize, getLineHeight, getColor } from "@utils/helper";

const StyledTypographyLink = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;

  ${() => getFontSize}
  ${() => getLineHeight}
  ${() => getColor}
`;

const TypographyLink = ({ children, componentSize, componentColor }) => {
  return (
    <StyledTypographyLink
      componentSize={componentSize}
      componentColor={componentColor}
    >
      <span>{children}</span>
    </StyledTypographyLink>
  );
};

export default TypographyLink;
