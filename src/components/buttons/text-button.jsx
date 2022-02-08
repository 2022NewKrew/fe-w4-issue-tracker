import styled from "styled-components";
import { useState } from "react";

import greyscale from "@styles/constants/greyscale";
import TypographyLink from "@styles/templates/typography-link";
import {
  allCenterAlign,
  disabledOpacity,
  getButtonWidth,
  getButtonHeight,
  getButtonTypographyLinkSize,
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
      <TypographyLink
        componentSize={getButtonTypographyLinkSize({ componentSize })}
        componentColor={greyscale.label}
      >
        <span>{children}</span>
      </TypographyLink>
    </StyledTextButton>
  );
};

export default TextButton;
