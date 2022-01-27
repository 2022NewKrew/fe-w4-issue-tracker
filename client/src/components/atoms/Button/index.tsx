import React, { EventHandler } from "react";
import styled, { css } from "styled-components";
import { flexCenter } from "@/styles/common";
import { theme } from "@/styles/theme";
import { BUTTON_TYPE } from "@/constants/type";
import { Plus } from "@/components/atoms/Icons";

// 여기서 button 의 타입에 맞게 css 를 반환해준다.
type TYPE_LARGE = "large";
type TYPE_MEDIUM_STANDARD = "mediumStandard";
type TYPE_SMALL_SECONDARY = "smallSecondary";
type TYPE_SMALL_STANDARD = "smallStandard";
type TYPE_TEXT_MEDIUM = "textMedium";
type TYPE_TEXT_SMALL = "textSmall";

type buttonType =
  | TYPE_LARGE
  | TYPE_MEDIUM_STANDARD
  | TYPE_SMALL_SECONDARY
  | TYPE_SMALL_STANDARD
  | TYPE_TEXT_MEDIUM
  | TYPE_TEXT_SMALL;

interface IButtonProps {
  type: buttonType;
  styles?: {
    color?: any;
    backgroundColor?: string;
    margin?: string;
    padding?: string;
    iconColor?: string;
    textAlign?: string;
  };
  onClick?: EventHandler<any & Event>;
}

const Button: React.FC<IButtonProps> = ({ type, styles, children, ...props }) => {
  const StyledButtonProps = {
    type,
    ...styles,
    ...props,
  };
  return (
    <StyledButton {...StyledButtonProps}>
      <Plus color={styles?.iconColor} />
      {children ?? "BUTTON"}
    </StyledButton>
  );
};

const StyledButton = styled.button<any>`
  ${flexCenter};
  & > svg {
    display: none;
  }
  ${({ type, color, backgroundColor, margin, padding, textAlign }) => {
    switch (type) {
      case BUTTON_TYPE.LARGE:
        return css`
          width: 340px;
          height: 64px;
          border-radius: 20px;
          font-size: 18px;
          background: ${backgroundColor ?? theme.color.primary};
          color: ${color ?? theme.color.offWhite};
          &:hover {
            background: ${backgroundColor ?? theme.color.primaryC1};
            opacity: 0.8;
          }
          &:active {
            background: ${backgroundColor ?? theme.color.primary};
            border: 4px solid ${theme.color.primaryC2};
          }
          &:disabled {
            background: ${theme.color.primary};
            opacity: 0.5;
          }
          margin: ${margin ?? ""};
        `;
      case BUTTON_TYPE.MEDIUM_STANDARD:
        return css`
          width: 240px;
          height: 56px;
          border-radius: 20px;
          background: ${theme.color.primary};
          font-size: 18px;
          color: ${theme.color.offWhite};
          &:hover {
            background: ${theme.color.primaryC1};
          }
          &:active {
            background: ${theme.color.primary};
            border: 4px solid ${theme.color.primaryC2};
          }
          &:disabled {
            background: ${theme.color.primary};
            opacity: 0.5;
          }
          margin: ${margin ?? ""};
        `;
      case BUTTON_TYPE.SMALL_SECONDARY:
        return css`
          box-sizing: border-box;
          width: 120px;
          height: 40px;
          background: ${theme.color.offWhite};
          border: 2px solid ${theme.color.primary};
          border-radius: 11px;
          font-size: 12px;
          color: ${theme.color.primary};
          &:hover {
            border: 2px solid ${theme.color.primaryC1};
          }
          &:active {
            border: 4px solid ${theme.color.primaryC2};
            box-sizing: border-box;
          }
          &:disabled {
            opacity: 0.5;
            border: 2px solid ${theme.color.primary};
          }
          & > svg {
            display: flex;
            margin-right: 4px;
            color: blue;
          }
          margin: ${margin ?? ""};
        `;
      case BUTTON_TYPE.SMALL_STANDARD:
        return css`
          padding: 0px 16px;
          width: 120px;
          height: 40px;
          border-radius: 11px;
          background: ${theme.color.primary};
          &:hover {
            background: ${theme.color.primaryC1};
          }
          &:active {
            background: ${theme.color.primary};
            border: 4px solid ${theme.color.primaryC2};
          }
          &:disabled {
            background: ${theme.color.primary};
            opacity: 0.5;
          }
          & > svg {
            margin: 0px 4px;
          }
          & > svg {
            display: flex;
            margin-right: 4px;
            color: blue;
          }
          font-size: 12px;
          color: ${theme.color.offWhite};
        `;
      case BUTTON_TYPE.TEXT_MEDIUM:
        return css`
          &:disabled {
            opacity: 0.5px;
          }
          width: 87px;
          height: 32px;
          color: ${theme.color.label};
          &:hover {
            color: ${theme.color.body};
          }
          &:active {
            color: ${theme.color.titleActive};
          }
          & > svg {
            display: flex;
            margin-right: 4px;
            color: blue;
          }
          font-size: 16px;
        `;
      case BUTTON_TYPE.TEXT_SMALL:
        return css`
          &:disabled {
            opacity: 0.5px;
          }
          width: 70px;
          height: 32px;
          color: ${theme.color.label};
          &:hover {
            color: ${theme.color.body};
          }
          &:active {
            color: ${theme.color.titleActive};
          }
          font-size: 12px;
          & > svg {
            display: flex;
            margin-right: 4px;
            color: blue;
          }
        `;
      default:
        return css``;
    }
  }}
`;

export default Button;
