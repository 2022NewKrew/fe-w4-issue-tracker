import styled from "styled-components";

import greyscale from "@styles/greyscale";
import { getFontWeight } from "@utils/helper";

const StyledDisplay = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-size: 32px;
  line-height: 48px;
  color: ${greyscale.default};
  ${() => getFontWeight}
`;

const Display = ({ children, type }) => {
  return (
    <StyledDisplay type={type}>
      <span>{children}</span>
    </StyledDisplay>
  );
};

export default Display;
