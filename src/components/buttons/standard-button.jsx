import styled from "styled-components";

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
  getButtonCustomLinkType,
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

const StandardButton = ({ children, customType }) => {
  return (
    <StyledStandardButton customType={customType}>
      <CustomLink
        customType={getButtonCustomLinkType({ customType })}
        color={greyscale.offWhite}
      >
        <span>{children}</span>
      </CustomLink>
    </StyledStandardButton>
  );
};

export default StandardButton;
