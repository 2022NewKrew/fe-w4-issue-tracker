import styled, { css } from "styled-components";

import colors from "@styles/colors";
import greyscale from "@styles/greyscale";

const getContainerBorder = ({ componentType }) => {
  switch (componentType) {
    case "regular":
      return css`
        border: 1px dashed ${colors.default};
      `;
    case "text-input":
      return css`
        border: 1px solid ${greyscale.titleActive};
      `;
    default:
      return css``;
  }
};

const getContainerBorderRadius = ({ componentType }) => {
  switch (componentType) {
    case "regular":
      return css`
        border-radius: 5px;
      `;
    case "text-input":
      return css`
        border-radius: 16px;
      `;
    default:
      return css``;
  }
};

const StyledContainer = styled.div`
  background: ${greyscale.offWhite};
  box-sizing: border-box;
  ${() => getContainerBorder}
  ${() => getContainerBorderRadius}
`;

const Container = ({ children, componentType }) => {
  return (
    <StyledContainer componentType={componentType}>
      <span>{children}</span>
    </StyledContainer>
  );
};

export default Container;
