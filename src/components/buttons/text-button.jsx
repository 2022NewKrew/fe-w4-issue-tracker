import styled from "styled-components";
import { useState } from "react";

import TemplateContainer from "@components/containers/template-container";
import greyscale from "@styles/constants/greyscale";
import numbers from "@styles/constants/numbers";
import {
  allCenterAlign,
  disabledOpacity,
  getButtonWidth,
  getButtonHeight,
  getButtoncomponentSize,
} from "@utils/helper";

const StyledTextButton = styled.button`
  padding: ${numbers.TEXT_BUTTON_PADDING};
  border: ${numbers.TEXT_BUTTON_BORDER_WIDTH};
  background: ${greyscale.OFF_WHITE};

  ${allCenterAlign}
  ${disabledOpacity}
  ${() => getButtonWidth}
  ${() => getButtonHeight}
`;

const TextButton = ({ children, componentSize, componentDisabled }) => {
  const [disabled, setDisabled] = useState(componentDisabled);

  return (
    <StyledTextButton disabled={disabled} componentSize={componentSize}>
      <TemplateContainer
        componentSize={getButtoncomponentSize({ componentSize })}
        componentColor={greyscale.LABEL}
      >
        <span>{children}</span>
      </TemplateContainer>
    </StyledTextButton>
  );
};

export default TextButton;
