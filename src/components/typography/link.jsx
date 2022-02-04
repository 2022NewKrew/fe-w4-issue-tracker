import styled from "styled-components";

import greyScale from "@styles/greyscale";
import { getFontSize, getLineHeight } from "@utils/helper";

const StyledLink = styled.a`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  color: ${greyScale.default};
  ${() => getFontSize}
  ${() => getLineHeight}
`;

const Link = ({ children, type }) => {
  return (
    <StyledLink type={type}>
      <span>{children}</span>
    </StyledLink>
  );
};

export default Link;
