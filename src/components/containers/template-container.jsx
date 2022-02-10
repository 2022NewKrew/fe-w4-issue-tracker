import styled, { css } from "styled-components";

import greyscale from "@styles/constants/greyscale";
import sizes from "@styles/constants/sizes";

import {
  logotypeLarge,
  logotypeMedium,
} from "@styles/templates/logotype-template";
import {
  displayBold,
  displayRegular,
} from "@styles/templates/display-template";
import {
  textLarge,
  textMedium,
  textSmall,
  textXSmall,
} from "@styles/templates/text-template";
import {
  linkLarge,
  linkMedium,
  linkSmall,
  linkXSmall,
} from "@styles/templates/link-template";

const getTemplate = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LOGOTYPE_LARGE:
      return logotypeLarge;
    case sizes.LOGOTYPE_MEDIUM:
      return logotypeMedium;
    case sizes.DISPLAY_BOLD:
      return displayBold;
    case sizes.DISPLAY_REGULAR:
      return displayRegular;
    case sizes.TEXT_LARGE:
      return textLarge;
    case sizes.TEXT_MEDIUM:
      return textMedium;
    case sizes.TEXT_SMALL:
      return textSmall;
    case sizes.TEXT_X_SMALL:
      return textXSmall;
    case sizes.LINK_LARGE:
      return linkLarge;
    case sizes.LINK_MEDIUM:
      return linkMedium;
    case sizes.LINK_SMALL:
      return linkSmall;
    case sizes.LINK_X_SMALL:
      return linkXSmall;
  }
};

const getColor = ({ componentColor }) => {
  return css`
    color: ${componentColor ? componentColor : greyscale.DEFAULT};
  `;
};

const StyledTemplateContainer = styled.span`
  ${() => getTemplate}
  ${() => getColor}
`;

const TemplateContainer = ({ children, componentSize, componentColor }) => {
  return (
    <StyledTemplateContainer
      componentSize={componentSize}
      componentColor={componentColor}
    >
      {children}
    </StyledTemplateContainer>
  );
};

export default TemplateContainer;
