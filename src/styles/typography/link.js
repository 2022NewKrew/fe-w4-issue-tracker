import styled from "styled-components";

import { getFontSize, getLineHeight, getColor } from "@utils/helper";

const StyledLink = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;

  ${() => getFontSize}
  ${() => getLineHeight}
  ${() => getColor}
`;

const Link = ({ children, componentSize, componentColor }) => {
  return (
    <StyledLink componentSize={componentSize} componentColor={componentColor}>
      <span>{children}</span>
    </StyledLink>
  );
};

export default Link;
