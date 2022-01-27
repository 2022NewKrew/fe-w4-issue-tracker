import styled, { css } from "styled-components";
import { Icon } from "../atoms/Icons";
import { Text } from "../atoms/Text";

export const FilterBar = ({ wrapperProps, buttonProps, inputProps }) => {
  return (
    <FilterWrapper {...wrapperProps}>
      <Button {...buttonProps}>
        <Text options={{ size: "small", isLink: true }}>필터</Text>
        <ButtonIcon name="arrow-down" />
      </Button>
      <InputWrapper>
        <InputIcon name="search" />
        <Input as="input" options={{ size: "small" }} {...inputProps} />
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
    color: ${theme.grayscale.placeholder};
    background-color: ${theme.grayscale.background};

    &:active,
    &.focus {
      background-color: ${theme.grayscale.offWhite};
      border: 1px solid ${theme.grayscale.titleActive};
      color: ${theme.grayscale.titleActive};
    }

    &.filled {
      color: ${theme.grayscale.titleActive};
    }
  `
);

const Button = styled.button(
  ({ theme }) => css`
    width: 128px;
    padding: 6px 48px 6px 24px;
    position: relative;

    border-right: 1px solid ${theme.grayscale.line};
    color: ${theme.grayscale.label};

    &:hover {
      background-color: ${theme.grayscale.line};
      color: ${theme.grayscale.body};
    }
  `
);

const InputWrapper = styled.div(
  ({ theme }) => css`
    width: 472px;
    position: relative;
    padding: 6px 24px 6px 48px;
    color: ${theme.grayscale.placeholder};
  `
);

const Input = styled(Text)`
  width: 100%;
`;

const ButtonIcon = styled(Icon)`
  position: absolute;
  top: 18px;
  right: 18px;
`;

const InputIcon = styled(Icon)`
  position: absolute;
  top: 12px;
  left: 24px;
`;
