import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({
    direction = "column",
    justifyContent = "center",
    alignItems = "center",
  }) => css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `}
`;
