import styled from "styled-components";
import { useState } from "react";

import TemplateContainer from "@components/containers/template-container";
import greyscale from "@styles/constants/greyscale";
import {
  allCenterAlign,
  disabledOpacity,
  getButtonWidth,
  getButtonHeight,
  getButtoncomponentType,
} from "@utils/helper";

const StyledTextButton = styled.button`
  padding: 0px;
  border: 20px;

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
        componentColor={greyscale.label}
      >
        <span>{children}</span>
      </TemplateContainer>
    </StyledTextButton>
  );
};

export default TextButton;
