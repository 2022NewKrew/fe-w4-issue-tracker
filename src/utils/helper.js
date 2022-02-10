import { css } from "styled-components";

import colors from "@styles/constants/colors";
import numbers from "@styles/constants/numbers";
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
    opacity: ${numbers.DISABLED_OPACITY};
  }
`;

export const buttonEvent = css`
  &:hover {
    border: ${numbers.BUTTON_HOVER_BORDER_WIDTH} solid ${colors.DARK_BLUE};
  }
  &:focus {
    border: ${numbers.BUTTON_FOCUS_BORDER_WIDTH} solid ${colors.LIGHT_BLUE};
  }

  ${disabledOpacity}
`;

export const getButtonPadding = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LARGE:
      return css`
        padding: ${numbers.BUTTON_LARGE_PADDING};
      `;
    case sizes.MEDIUM:
      return css`
        padding: ${numbers.BUTTON_MEDIUM_PADDING};
      `;
    case sizes.SMALL:
      return css`
        padding: ${numbers.BUTTON_SMALL_PADDING};
      `;
    default:
      return css``;
  }
};

export const getButtonWidth = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LARGE:
      return css`
        width: ${numbers.BUTTON_LARGE_WIDTH};
      `;
    case sizes.MEDIUM:
      return css`
        width: ${numbers.BUTTON_MEDIUM_WIDTH};
      `;
    case sizes.SMALL:
      return css`
        width: ${numbers.BUTTON_SMALL_WIDTH};
      `;
    default:
      return css``;
  }
};

export const getButtonHeight = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LARGE:
      return css`
        height: ${numbers.BUTTON_LARGE_HEIGHT};
      `;
    case sizes.MEDIUM:
      return css`
        height: ${numbers.BUTTON_MEDIUM_HEIGHT};
      `;
    case sizes.SMALL:
      return css`
        height: ${numbers.BUTTON_SMALL_HEIGHT};
      `;
    default:
      return css``;
  }
};

export const getButtonBorderRadius = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LARGE:
      return css`
        border-radius: ${numbers.BUTTON_LARGE_BORDER_RADIUS};
      `;
    case sizes.MEDIUM:
      return css`
        border-radius: ${numbers.BUTTON_MEDIUM_BORDER_RADIUS};
      `;
    case sizes.SMALL:
      return css`
        border-radius: ${numbers.BUTTON_SMALL_BORDER_RADIUS};
      `;
    default:
      return css``;
  }
};

export const getButtoncomponentSize = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.LARGE:
    case sizes.MEDIUM:
      return sizes.LINK_MEDIUM;
    case sizes.SMALL:
      return sizes.LINK_X_SMALL;
    default:
      return "";
  }
};

export const getTextInputDisplay = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.SMALL:
      return css`
        display: flex;
      `;
    default:
      return css``;
  }
};

export const getTextInputAlignItems = ({ componentSize }) => {
  switch (componentSize) {
    case sizes.SMALL:
      return css`
        align-items: center;
      `;
    default:
      return css``;
  }
};
