import styled from "styled-components";

import greyscale from "@styles/greyscale";
import { getFontWeight } from "@utils/helper";

const StyledCustomDisplay = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-size: 32px;
  line-height: 48px;
  color: ${greyscale.default};

  ${() => getFontWeight}
`;

const CustomDisplay = ({ children, componentWeight }) => {
  return (
    <StyledCustomDisplay componentWeight={componentWeight}>
      <span>{children}</span>
    </StyledCustomDisplay>
  );
};

export default CustomDisplay;
