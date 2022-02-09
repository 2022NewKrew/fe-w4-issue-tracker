import styled, { css } from "styled-components";
import { cssFontSize } from "./Text";

export const RadioOptionSelection = ({ label, value, options, ...props }) => {
  const items = options?.map((option) => (
    <>
      <input type="radio" id={option.value} name={label} value={option.value} checked={value === option.value} />
      <StyledLabel htmlFor={option.value}>{option.label}</StyledLabel>
    </>
  ));

  return (
    <Wrapper {...props}>
      <Title>{label}</Title>
      {items}
    </Wrapper>
  );
};

const Wrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 0 24px;
    height: 40px;
    background-color: ${theme.grayscale.inputBackground};
    color: ${theme.grayscale.label};
    border-radius: 11px;

    & > *:not(:last-child, :first-child) {
      margin-right: 8px;
    }
  `
);

const Title = styled.label`
  ${cssFontSize["xsmall"]}
  width: 80px;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.grayscale.titleActive};
`;
