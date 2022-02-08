import styled from "styled-components";

import themeGreyscale from "@styles/theme/theme-greyscale";
import { getFontWeight } from "@utils/helper";

const StyledDisplay = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-size: 32px;
  line-height: 48px;
  color: ${themeGreyscale.default};

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
