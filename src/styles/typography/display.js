import styled from "styled-components";

import greyscale from "@styles/theme/greyscale";
import { getFontWeight } from "@utils/helper";

const StyledDisplay = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-size: 32px;
  line-height: 48px;
  color: ${greyscale.default};

  ${() => getFontWeight}
`;

const Display = ({ children, componentWeight }) => {
  return (
    <StyledDisplay componentWeight={componentWeight}>
      <span>{children}</span>
    </StyledDisplay>
  );
};

export default Display;
