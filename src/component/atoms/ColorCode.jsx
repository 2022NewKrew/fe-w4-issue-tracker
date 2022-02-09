import styled, { css } from "styled-components";
import { Icon } from "./Icons";
import { cssFontSize } from "./Text";

export const ColorCode = ({ handleRefresh, label, ...props }) => {
  return (
    <InputWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...props} />
      <StyledIcon name="refresh-ccw" onClick={handleRefresh} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div(
  ({ theme }) => css`
    width: 240px;
    height: 40px;
    padding: 0 24px;
    background-color: ${theme.grayscale.inputBackground};
    border-radius: 11px;
    overflow: hidden;
    color: ${theme.grayscale.label};

    display: flex;
    align-items: center;

    &:focus-within {
      background-color: ${theme.grayscale.offWhite};
      outline: 1px solid ${theme.grayscale.titleActive};
    }
  `
);

const StyledLabel = styled.label`
  ${cssFontSize["xsmall"]}
  width: 80px;
  margin-right: 8px;
`;

const StyledInput = styled.input(
  ({ theme }) => css`
    ${cssFontSize["small"]}
    width: 80px;
    margin-right: 8px;
    color: ${theme.grayscale.inputActive};
  `
);

const StyledIcon = styled(Icon)`
  cursor: pointer;
`;
