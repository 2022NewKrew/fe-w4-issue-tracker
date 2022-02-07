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

const CustomLink = ({ children, componentSize, componentColor }) => {
  return (
    <StyledCustomLink
      componentSize={componentSize}
      componentColor={componentColor}
    >
      <span>{children}</span>
    </StyledCustomLink>
  );
};

export default CustomLink;
