import styled from "styled-components";

import themeGreyscale from "@styles/themes/theme-greyscale";
import { getFontWeight } from "@utils/helper";

const StyledTypographyDisplay = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-size: 32px;
  line-height: 48px;
  color: ${themeGreyscale.default};

  ${() => getFontWeight}
`;

const TypographyDisplay = ({ children, componentWeight }) => {
  return (
    <StyledTypographyDisplay componentWeight={componentWeight}>
      <span>{children}</span>
    </StyledTypographyDisplay>
  );
};

export default TypographyDisplay;
