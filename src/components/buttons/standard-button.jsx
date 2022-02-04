import styled from "styled-components";

import CustomLink from "@components/typography/custom-link";
import colors from "@styles/colors";
import greyscale from "@styles/greyscale";
import {
  allCenterAlign,
  getButtonPadding,
  getButtonWidth,
  getButtonHeight,
  getButtonBorderRadius,
  getButtonCustomLinkType,
} from "@utils/helper";

const StyledStandardButton = styled.button`
  background: ${colors.blue};
  border: 2px solid ${colors.blue};
  border-style: solid;
  ${allCenterAlign}
  ${() => getButtonPadding}
  ${() => getButtonWidth}
  ${() => getButtonHeight}
  ${() => getButtonBorderRadius}
`;

const StandardButton = ({ children, type }) => {
  return (
    <StyledStandardButton type={type}>
      <CustomLink
        type={getButtonCustomLinkType({ type })}
        color={greyscale.offWhite}
      >
        <span>{children}</span>
      </CustomLink>
    </StyledStandardButton>
  );
};

export default StandardButton;
