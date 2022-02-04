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

const StyledStandardButton = styled.button`
  background: ${colors.blue};
  ${allCenterAlign}
  ${() => getButtonPadding}
  ${() => getButtonWidth}
  ${() => getButtonHeight}
  ${() => getButtonBorderRadius}
`;

const StandardButton = ({ children, type }) => {
  return (
    <StyledStandardButton type={type}>
      <Link type={getButtonLinkType({ type })} color={greyscale.offWhite}>
        <span>{children}</span>
      </Link>
    </StyledStandardButton>
  );
};

export default StandardButton;
