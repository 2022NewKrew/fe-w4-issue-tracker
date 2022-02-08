import styled from "styled-components";
import { useState } from "react";

import colors from "@styles/theme/colors";
import greyscale from "@styles/theme/greyscale";
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
  background: ${greyscale.offWhite};
  border: 2px solid ${colors.blue};
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
        componentColor={colors.blue}
      >
        <span>{children}</span>
      </Link>
    </StyledSecondaryButton>
  );
};

export default SecondaryButton;
