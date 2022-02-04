import styled from "styled-components";

import { getFontSize, getLineHeight, getColor } from "@utils/helper";

const StyledCustomLink = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  ${() => getFontSize}
  ${() => getLineHeight}
  ${() => getColor}
`;

const CustomLink = ({ children, type, color }) => {
  return (
    <StyledCustomLink type={type} color={color}>
      <span>{children}</span>
    </StyledCustomLink>
  );
};

export default CustomLink;
