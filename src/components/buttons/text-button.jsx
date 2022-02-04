import styled from "styled-components";

import CustomLink from "@components/typography/custom-link";
import greyscale from "@styles/greyscale";
import {
  allCenterAlign,
  getButtonPadding,
  getButtonWidth,
  getButtonHeight,
  getButtonBorderRadius,
  getButtonCustomLinkType,
} from "@utils/helper";

const StyledTextButton = styled.button`
  border: 2px solid ${greyscale.offWhite};
  ${allCenterAlign}
  ${() => getButtonPadding}
  ${() => getButtonWidth}
  ${() => getButtonHeight}
  ${() => getButtonBorderRadius}
`;

const TextButton = ({ children, type }) => {
  return (
    <StyledTextButton type={type}>
      <CustomLink
        type={getButtonCustomLinkType({ type })}
        color={greyscale.label}
      >
        <span>{children}</span>
      </CustomLink>
    </StyledTextButton>
  );
};

export default TextButton;
