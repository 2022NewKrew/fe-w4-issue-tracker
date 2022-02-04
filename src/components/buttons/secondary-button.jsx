import styled from "styled-components";

import Link from "@components/typography/link";
import colors from "@styles/colors";
import greyscale from "@styles/greyscale";
import {
  allCenterAlign,
  getButtonPadding,
  getButtonWidth,
  getButtonHeight,
  getButtonBorderRadius,
  getButtonLinkType,
} from "@utils/helper";

const StyledSecondaryButton = styled.button`
  background: ${greyscale.offWhite};
  border: 2px solid ${colors.blue};
  box-sizing: border-box;
  ${allCenterAlign}
  ${() => getButtonPadding}
  ${() => getButtonWidth}
  ${() => getButtonHeight}
  ${() => getButtonBorderRadius}
`;

const SecondaryButton = ({ children, type }) => {
  return (
    <StyledSecondaryButton type={type}>
      <Link type={getButtonLinkType({ type })} color={colors.blue}>
        <span>{children}</span>
      </Link>
    </StyledSecondaryButton>
  );
};

export default SecondaryButton;
