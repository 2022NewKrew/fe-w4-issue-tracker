import styled from "styled-components";

import Link from "@components/typography/link";
import greyscale from "@styles/greyscale";
import {
  allCenterAlign,
  getButtonPadding,
  getButtonWidth,
  getButtonHeight,
  getButtonBorderRadius,
  getButtonLinkType,
} from "@utils/helper";

const StyledTextButton = styled.button`
  border-color: ${greyscale.offWhite};
  ${allCenterAlign}
  ${() => getButtonPadding}
  ${() => getButtonWidth}
  ${() => getButtonHeight}
  ${() => getButtonBorderRadius}
`;

const TextButton = ({ children, type }) => {
  return (
    <StyledTextButton type={type}>
      <Link type={getButtonLinkType({ type })} color={greyscale.label}>
        <span>{children}</span>
      </Link>
    </StyledTextButton>
  );
};

export default TextButton;
