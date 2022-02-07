import styled from "styled-components";

import CustomLink from "@components/typography/custom-link";
import greyscale from "@styles/greyscale";
import {
  allCenterAlign,
  getButtonWidth,
  getButtonHeight,
  getButtonCustomLinkSize,
} from "@utils/helper";

const StyledTextButton = styled.button`
  padding: 0px;
  border: 20px;
  ${allCenterAlign}
  ${() => getButtonWidth}
  ${() => getButtonHeight}
`;

const TextButton = ({ children, componentSize }) => {
  return (
    <StyledTextButton componentSize={componentSize}>
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
