import styled, { css } from "styled-components";

import greyscale from "@styles/constants/greyscale";

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

const getTemplate = ({ componentType }) => {
  switch (componentType) {
    case "logotypeLarge":
      return logotypeLarge;
    case "logotypeMedium":
      return logotypeMedium;
    case "displayBold":
      return displayBold;
    case "displayRegular":
      return displayRegular;
    case "textLarge":
      return textLarge;
    case "textMedium":
      return textMedium;
    case "textSmall":
      return textSmall;
    case "textXSmall":
      return textXSmall;
    case "linkLarge":
      return linkLarge;
    case "linkMedium":
      return linkMedium;
    case "linkSmall":
      return linkSmall;
    case "linkXSmall":
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

const TemplateContainer = ({ children, componentType, componentColor }) => {
  return (
    <StyledTemplateContainer
      componentType={componentType}
      componentColor={componentColor}
    >
      {children}
    </StyledTemplateContainer>
  );
};

export default TemplateContainer;
