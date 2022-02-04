import styled from "styled-components";

import { getFontSize, getLineHeight, getColor } from "@utils/helper";

const StyledCustomText = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  ${() => getFontSize}
  ${() => getLineHeight}
  ${() => getColor}
`;

const CustomText = ({ children, customType, color }) => {
  return (
    <StyledCustomText customType={customType} color={color}>
      <span>{children}</span>
    </StyledCustomText>
  );
};

export default CustomText;
