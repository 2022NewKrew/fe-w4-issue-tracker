import styled from "styled-components";
import { useState } from "react";

import themeColors from "@styles/themes/theme-colors";
import themeGreyscale from "@styles/themes/theme-greyscale";
import TypographyLink from "@styles/templates/typography-link";
import {
  allCenterAlign,
  buttonEvent,
  getButtonPadding,
  getButtonWidth,
  getButtonHeight,
  getButtonBorderRadius,
  getButtonTypographyLinkSize,
} from "@utils/helper";

const StyledSecondaryButton = styled.button`
  background: ${themeGreyscale.offWhite};
  border: 2px solid ${themeColors.blue};
  box-sizing: border-box;

  ${allCenterAlign}
  ${buttonEvent}
  ${() => getButtonPadding}
  ${() => getButtonWidth}
  ${() => getButtonHeight}
  ${() => getButtonBorderRadius}
`;

const SecondaryButton = ({ children, componentSize, componentDisabled }) => {
  const [disabled, setDisabled] = useState(componentDisabled);

  return (
    <StyledSecondaryButton disabled={disabled} componentSize={componentSize}>
      <TypographyLink
        componentSize={getButtonTypographyLinkSize({ componentSize })}
        componentColor={themeColors.blue}
      >
        <span>{children}</span>
      </TypographyLink>
    </StyledSecondaryButton>
  );
};

export default SecondaryButton;
