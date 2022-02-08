import styled from "styled-components";
import { useState } from "react";

import TemplateContainer from "@components/containers/template-container";
import colors from "@styles/constants/colors";
import numbers from "@styles/constants/numbers";
import greyscale from "@styles/constants/greyscale";
import {
  allCenterAlign,
  buttonEvent,
  getButtonPadding,
  getButtonWidth,
  getButtonHeight,
  getButtonBorderRadius,
  getButtoncomponentSize,
} from "@utils/helper";

const StyledSecondaryButton = styled.button`
  background: ${greyscale.OFF_WHITE};
  border: ${numbers.SECONDARY_BUTTON_BORDER_WIDTH} solid ${colors.BLUE};
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
      <TemplateContainer
        componentSize={getButtoncomponentSize({ componentSize })}
        componentColor={colors.BLUE}
      >
        <span>{children}</span>
      </TemplateContainer>
    </StyledSecondaryButton>
  );
};

export default SecondaryButton;
