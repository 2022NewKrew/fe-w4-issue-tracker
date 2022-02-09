import styled, { css } from "styled-components";
import { Icon } from "../atoms/Icons";
import { cssFontSize, cssLink } from "../atoms/Text";

export const FilterBar = ({ wrapperProps, buttonProps, inputProps }) => {
  return (
    <FilterWrapper {...wrapperProps}>
      <button css={cssFilterButton} {...buttonProps}>
        <p css={[cssFontSize["small"], cssLink]}>필터</p>
        <Icon css={cssButtonIcon} name="arrow-down" />
      </button>
      <InputWrapper>
        <Icon css={cssInputIcon} name="search" />
        <input css={[cssFontSize["small"], cssFilterInput]} pattern=".+" required {...inputProps} />
      </InputWrapper>
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    position: relative;
    height: 40px;
    border: 1px solid ${theme.grayscale.line};
    border-radius: 11px;
    overflow: hidden;

    &:active,
    &:focus-within {
      border: 1px solid ${theme.grayscale.titleActive};
    }
  `
);

const cssFilterButton = ({ theme }) => css`
  width: 128px;
  padding: 6px 48px 6px 24px;
  position: relative;
  border-right: 1px solid ${theme.grayscale.line};
  color: ${theme.grayscale.label};

  &:hover {
    background-color: ${theme.grayscale.line};
    color: ${theme.grayscale.body};
  }
`;

const InputWrapper = styled.div(
  ({ theme }) => css`
    width: 472px;
    position: relative;
    padding: 6px 24px 6px 48px;
    background-color: ${theme.grayscale.inputBackground};
    color: ${theme.grayscale.placeholder};

    &:focus-within {
      background-color: ${theme.grayscale.offWhite};
      color: ${theme.grayscale.label};
    }
  `
);

const cssFilterInput = ({ theme }) => css`
  width: 100%;
  color: ${theme.grayscale.placeholder};

  &:focus,
  &:valid {
    color: ${theme.grayscale.titleActive};
  }
`;

const cssButtonIcon = css`
  position: absolute;
  top: 18px;
  right: 18px;
`;

const cssInputIcon = css`
  position: absolute;
  top: 12px;
  left: 24px;
`;
