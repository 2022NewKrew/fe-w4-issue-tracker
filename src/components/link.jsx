import styled, { css } from "styled-components";

import { getFontSize, getLineHeight } from "@utils/helper";

const StyledLink = styled.a`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  color: #000000;
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
