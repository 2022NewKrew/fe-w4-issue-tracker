import styled from "styled-components";
import { useState } from "react";

import themeGreyscale from "@styles/theme/theme-greyscale";
import Link from "@styles/typography/link";
import {
  allCenterAlign,
  disabledOpacity,
  getButtonWidth,
  getButtonHeight,
  getButtonLinkSize,
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
      <Link
        componentSize={getButtonLinkSize({ componentSize })}
        componentColor={themeGreyscale.label}
      >
        <span>{children}</span>
      </Link>
    </StyledTextButton>
  );
};

export default TextButton;
