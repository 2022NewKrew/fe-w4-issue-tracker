import styled, { css } from "styled-components";

export default styled.div(
  ({ theme }) => css`
    background: ${theme.grayscale.background};
    display: flex;
    align-items: center;
    width: 100%;
    height: 64px;
    padding: 0 32px;
    color: ${theme.grayscale.label};
  `
);
