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

const StyledTextInput = styled.input`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  color: ${greyscale.titleActive};
`;

const TextInput = ({ children, type }) => {
  return (
    <StyledTextInput type={type}>
      <CustomLink
        type={getButtonCustomLinkType({ type })}
        color={greyscale.offWhite}
      >
        <span>{children}</span>
      </CustomLink>
    </StyledTextInput>
  );
};

export default TextInput;
