import styled from "styled-components";
import { useState } from "react";

import themeColors from "@styles/theme/theme-colors";
import themeGreyscale from "@styles/theme/theme-greyscale";
import Link from "@styles/typography/link";
import {
  allCenterAlign,
  buttonEvent,
  getButtonPadding,
  getButtonWidth,
  getButtonHeight,
  getButtonBorderRadius,
  getButtonLinkSize,
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
      <Link
        componentSize={getButtonLinkSize({ componentSize })}
        componentColor={themeColors.blue}
      >
        <span>{children}</span>
      </Link>
    </StyledSecondaryButton>
  );
};

export default SecondaryButton;
