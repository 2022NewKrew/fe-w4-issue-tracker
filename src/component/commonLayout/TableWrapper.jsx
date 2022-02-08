import styled, { css } from "styled-components";

export default styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.grayscale.line};
    border-radius: 16px;
    overflow: hidden;
    width: 100%;

    & > *:not(:last-child) {
      border-bottom: 1px solid ${theme.grayscale.line};
    }
  `
);
