import styled, { css } from "styled-components";
import { Icon } from "./Icons";

export const CheckBox = styled(Icon).attrs(({ checked }) => ({
  name: checked ? "check-box-active" : "check-box-initial",
}))(
  ({ theme, checked }) => css`
    margin: 0px 32px;
    color: ${checked ? theme.color.blue.default : theme.grayscale.offWhite};
    stroke: ${checked ? theme.grayscale.offWhite : theme.grayscale.line};
  `
);
