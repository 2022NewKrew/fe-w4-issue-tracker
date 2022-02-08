import React, { useCallback } from "react";
import styled, { css } from "styled-components";
import { theme } from "@/styles/theme";
import { AlertCircle, Archive } from "@/components/atoms/Icons";
import { IStyle } from "@/constants/type";

interface LabelProps {
  type?: "large" | "large-open" | "large-close" | "small-dark" | "small-light" | "small-line";
  children?: React.ReactNode;
  styles?: IStyle;
}
interface ITransedIcon {
  type?: string;
  color?: string;
}
const TransedIcon: React.FC<ITransedIcon> = iconProps => {
  switch (iconProps.type) {
    case "large":
      return <AlertCircle {...iconProps} />;
    case "large-open":
      return (
        <>
          <AlertCircle {...iconProps} />
          열린 이슈
        </>
      );
    case "large-close":
      return (
        <>
          <Archive {...iconProps} />
          닫힌 이슈
        </>
      );
    default:
      return <></>;
  }
};
const Label: React.FC<LabelProps> = ({ type, styles, children }) => {
  const Props = {
    LabelWrapProps: {
      type: type,
      ...styles,
    },
    IconProps: {
      type: type,
      color: styles?.iconColor ?? styles?.color,
    },
  };
  return (
    <LabelWrap {...Props.LabelWrapProps}>
      {TransedIcon(Props.IconProps)}
      {children}
    </LabelWrap>
  );
};

const LabelWrap = styled.div<any>`
  ${({ type, width, background, borderColor = background, fontSize, color, childCSS, margin }) => {
    switch (type) {
      case "large":
        return css`
          background: ${background ?? theme.color.primaryC2};
          border: 1px solid ${borderColor ?? theme.color.primary};
          ${childCSS ?? css``};
          margin: ${margin ?? ""};
          display: flex;
          height: 40px;
          position: relative;
          & > svg {
            margin-right: 8px;
          }
        `;
      case "large-open":
        return css`
          width: ${width ?? "110px"};
          margin: ${margin ?? ""};
          background: ${background ?? theme.color.primaryC2};
          border: 1px solid ${borderColor ?? theme.color.primary};
          font-size: ${fontSize ?? "12px"};
          color: ${color ?? theme.color.primary};
          height: 40px;
          font-weight: 500;
          line-height: 38px;
          box-sizing: border-box;
          text-align: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 3px;
          & > svg {
            margin-right: 8px;
            margin-bottom: 2px;
          }
        `;
      case "large-close":
        return css`
          width: ${width ?? "110px"};
          margin: ${margin ?? ""};
          background: ${background ?? theme.color.secondaryC1};
          border: 1px solid ${background ?? theme.color.secondary};
          font-size: ${fontSize ?? "12px"};
          color: ${color ?? theme.color.secondary};
          height: 40px;
          font-weight: 500;
          line-height: 38px;
          box-sizing: border-box;
          text-align: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 3px;
          & > svg {
            margin-right: 8px;
            margin-bottom: 2px;
          }
        `;
      case "small-dark":
        return css`
          width: 90px;
          height: 28px;
          font-weight: 500;
          font-size: 12px;
          line-height: 28px;
          text-align: center;
          background: #f7f7fc;
          color: #14142b;
        `;
      case "small-light":
        return css`
          width: 90px;
          height: 28px;
          background: ${background ?? "#4e4b66"};
          margin: ${margin ?? "auto"};
          color: ${color ?? "#fefefe"};
          font-weight: 500;
          font-size: 12px;
          line-height: 28px;
          padding-top: 1px;
          text-align: center;
        `;
      case "small-line":
        return css`
          width: 66px;
          height: 28px;
          border: 1px solid #d9dbe9;
          box-sizing: border-box;
          font-weight: 500;
          font-size: 12px;
          line-height: 28px;
          text-align: center;
          color: #6e7191;
        `;

      default:
        return css``;
    }
  }}
  cursor:pointer;
  border-radius: 30px;
`;
export default Label;
