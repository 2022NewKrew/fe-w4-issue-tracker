import { css } from "styled-components";

import colors from "@styles/constants/colors";
import sizes from "@styles/constants/sizes";

export const allCenterAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const allBorderRemove = css`
  border: none;
  box-shadow: none;
  outline: none;
`;

export const disabledOpacity = css`
  &:disabled {
    opacity: ${sizes.DISABLED_OPACITY};
  }
`;

export const buttonEvent = css`
  &:hover {
    border: ${sizes.BUTTON_HOVER_BORDER_WIDTH} solid ${colors.DARK_BLUE};
  }
  &:focus {
    border: ${sizes.BUTTON_FOCUS_BORDER_WIDTH} solid ${colors.LIGHT_BLUE};
  }

  ${disabledOpacity}
`;

export const getButtonPadding = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        padding: ${sizes.BUTTON_LARGE_PADDING};
      `;
    case "medium":
      return css`
        padding: ${sizes.BUTTON_MEDIUM_PADDING};
      `;
    case "small":
      return css`
        padding: ${sizes.BUTTON_SMALL_PADDING};
      `;
    default:
      return css``;
  }
};

export const getButtonWidth = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        width: ${sizes.BUTTON_LARGE_WIDTH};
      `;
    case "medium":
      return css`
        width: ${sizes.BUTTON_MEDIUM_WIDTH};
      `;
    case "small":
      return css`
        width: ${sizes.BUTTON_SMALL_WIDTH};
      `;
    default:
      return css``;
  }
};

export const getButtonHeight = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        height: ${sizes.BUTTON_LARGE_HEIGHT};
      `;
    case "medium":
      return css`
        height: ${sizes.BUTTON_MEDIUM_HEIGHT};
      `;
    case "small":
      return css`
        height: ${sizes.BUTTON_SMALL_HEIGHT};
      `;
    default:
      return css``;
  }
};

export const getButtonBorderRadius = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
      return css`
        border-radius: ${sizes.BUTTON_LARGE_BORDER_RADIUS};
      `;
    case "medium":
      return css`
        border-radius: ${sizes.BUTTON_MEDIUM_BORDER_RADIUS};
      `;
    case "small":
      return css`
        border-radius: ${sizes.BUTTON_SMALL_BORDER_RADIUS};
      `;
    default:
      return css``;
  }
};

export const getButtoncomponentType = ({ componentSize }) => {
  switch (componentSize) {
    case "large":
    case "medium":
      return "linkMedium";
    case "small":
      return "linkXSmall";
    default:
      return "";
  }
};

export const getTextInputDisplay = ({ componentSize }) => {
  switch (componentSize) {
    case "small":
      return css`
        display: flex;
      `;
    default:
      return css``;
  }
};

export const getTextInputAlignItems = ({ componentSize }) => {
  switch (componentSize) {
    case "small":
      return css`
        align-items: center;
      `;
    default:
      return css``;
  }
};
