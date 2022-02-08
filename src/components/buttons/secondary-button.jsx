import styled from "styled-components";
import { useState } from "react";

import TemplateContainer from "@components/containers/template-container";
import colors from "@styles/constants/colors";
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
      <TemplateContainer
        componentType={getButtoncomponentType({ componentSize })}
        componentColor={colors.blue}
      >
        <span>{children}</span>
      </TemplateContainer>
    </StyledSecondaryButton>
  );
};

export default SecondaryButton;
