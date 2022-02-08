import styled from "styled-components";
import { useState } from "react";

import TemplateContainer from "@components/containers/template-container";
import colors from "@styles/constants/colors";
import sizes from "@styles/constants/sizes";
import greyscale from "@styles/constants/greyscale";
import {
  allCenterAlign,
  buttonEvent,
  getButtonPadding,
  getButtonWidth,
  getButtonHeight,
  getButtonBorderRadius,
  getButtoncomponentType,
} from "@utils/helper";

const StyledStandardButton = styled.button`
  background: ${colors.BLUE};
  border: ${sizes.STANDARD_BUTTON_BORDER_WIDTH} solid ${colors.BLUE};

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
      <TemplateContainer
        componentType={getButtoncomponentType({ componentSize })}
        componentColor={greyscale.OFF_WHITE}
      >
        <span>{children}</span>
      </TemplateContainer>
    </StyledStandardButton>
  );
};

export default StandardButton;
