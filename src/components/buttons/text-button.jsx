import styled from "styled-components";
import { useState } from "react";

import TemplateContainer from "@components/containers/template-container";
import greyscale from "@styles/constants/greyscale";
import sizes from "@styles/constants/sizes";
import {
  allCenterAlign,
  disabledOpacity,
  getButtonWidth,
  getButtonHeight,
  getButtoncomponentType,
} from "@utils/helper";

const StyledTextButton = styled.button`
  padding: ${sizes.TEXT_BUTTON_PADDING};
  border: ${sizes.TEXT_BUTTON_BORDER_WIDTH};
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
        componentType={getButtoncomponentType({ componentSize })}
        componentColor={greyscale.LABEL}
      >
        <span>{children}</span>
      </TemplateContainer>
    </StyledTextButton>
  );
};

export default TextButton;
