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
  getButtonCustomLinkSize,
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

const SecondaryButton = ({ children, componentSize }) => {
  return (
    <StyledSecondaryButton componentSize={componentSize}>
      <CustomLink
        componentSize={getButtonCustomLinkSize({ componentSize })}
        componentColor={colors.blue}
      >
        <span>{children}</span>
      </CustomLink>
    </StyledSecondaryButton>
  );
};

export default SecondaryButton;
