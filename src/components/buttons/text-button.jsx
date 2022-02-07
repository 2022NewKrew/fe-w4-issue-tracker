import styled from "styled-components";
import { useState } from "react";

import CustomLink from "@components/typography/custom-link";
import greyscale from "@styles/greyscale";
import {
  allCenterAlign,
  disabledOpacity,
  getButtonWidth,
  getButtonHeight,
  getButtonCustomLinkSize,
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
      <CustomLink
        componentSize={getButtonCustomLinkSize({ componentSize })}
        componentColor={greyscale.label}
      >
        <span>{children}</span>
      </CustomLink>
    </StyledTextButton>
  );
};

export default TextButton;
