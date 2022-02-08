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

const StyledStandardButton = styled.button`
  background: ${colors.blue};
  border: 2px solid ${colors.blue};

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
      <Link
        componentSize={getButtonLinkSize({ componentSize })}
        componentColor={greyscale.offWhite}
      >
        <span>{children}</span>
      </Link>
    </StyledStandardButton>
  );
};

export default StandardButton;
