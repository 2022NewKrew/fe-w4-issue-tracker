import styled from "styled-components";
import { useState } from "react";

import themeColors from "@styles/theme/theme-colors";
import themeGreyscale from "@styles/theme/theme-greyscale";
import TypographyLink from "@styles/typography/typography-link";
import {
  allCenterAlign,
  buttonEvent,
  getButtonPadding,
  getButtonWidth,
  getButtonHeight,
  getButtonBorderRadius,
  getButtonTypographyLinkSize,
} from "@utils/helper";

const StyledStandardButton = styled.button`
  background: ${themeColors.blue};
  border: 2px solid ${themeColors.blue};

  ${allCenterAlign}
  ${buttonEvent}
  ${() => getButtonPadding}
  ${() => getButtonWidth}
  ${() => getButtonHeight}
  ${() => getButtonBorderRadius}
`;

const StandardButton = ({ children, componentSize, componentDisabled }) => {
  const [disabled, setDisabled] = useState(componentDisabled);

  return (
    <StyledStandardButton disabled={disabled} componentSize={componentSize}>
      <TypographyLink
        componentSize={getButtonTypographyLinkSize({ componentSize })}
        componentColor={themeGreyscale.offWhite}
      >
        <span>{children}</span>
      </TypographyLink>
    </StyledStandardButton>
  );
};

export default StandardButton;
