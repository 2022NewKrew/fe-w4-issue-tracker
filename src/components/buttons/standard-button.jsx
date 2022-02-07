import styled from "styled-components";
import { useState } from "react";

import CustomLink from "@components/typography/custom-link";
import colors from "@styles/colors";
import greyscale from "@styles/greyscale";
import {
  allCenterAlign,
  buttonEvent,
  getButtonPadding,
  getButtonWidth,
  getButtonHeight,
  getButtonBorderRadius,
  getButtonCustomLinkSize,
} from "@utils/helper";

const StyledStandardButton = styled.button`
  background: ${colors.blue};
  border: 2px solid ${colors.blue};

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
      <CustomLink
        componentSize={getButtonCustomLinkSize({ componentSize })}
        componentColor={greyscale.offWhite}
      >
        <span>{children}</span>
      </CustomLink>
    </StyledStandardButton>
  );
};

export default StandardButton;
