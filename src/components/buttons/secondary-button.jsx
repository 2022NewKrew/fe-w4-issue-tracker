import styled from "styled-components";
import { useState } from "react";

import colors from "@styles/constants/colors";
import greyscale from "@styles/constants/greyscale";
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
      <TypographyLink
        componentSize={getButtonTypographyLinkSize({ componentSize })}
        componentColor={colors.blue}
      >
        <span>{children}</span>
      </TypographyLink>
    </StyledSecondaryButton>
  );
};

export default SecondaryButton;
