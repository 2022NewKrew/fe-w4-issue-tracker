import React from "react";
import styled, { css } from "styled-components";
import { TEXT_TYPE } from "@/constants/type";
import { theme } from "@/styles/theme";
import { IStyle } from "@/constants/type";

type TextType = "large" | "medium" | "small" | "xsmall" | "issue";
interface ITextProps {
  type: TextType;
  styles?: IStyle;
  className?: string;
}

const Text: React.FC<ITextProps> = ({ type, styles, ...props }) => {
  const StyledTextProps = {
    type,
    ...styles,
    ...props,
  };
  return <StyledText {...StyledTextProps}></StyledText>;
};

const StyledText = styled.div<any>`
  ${({ type, margin, fontSize, width, height, childCSS }) => {
    console.log(margin);
    switch (type) {
      case TEXT_TYPE.LARGE:
        return css`
          width: 276px;
          height: 80px;
          font-size: 24px;
          line-height: 40px;
          color: ${theme.color.body};
          margin: ${margin ?? "auto"};
          font-weight: ${fontSize ?? "normal"};
          ${childCSS}
        `;
      case TEXT_TYPE.MEDIUM:
        return css`
          width: ${width ?? "207px"};
          height: ${height ?? "64px"};
          font-size: 18px;
          color: ${theme.color.body};
          margin: ${margin ?? "auto"};
          font-weight: ${fontSize ?? "normal"};
          ${childCSS}
        `;
      case TEXT_TYPE.SMALL:
        return css`
          width: ${width ?? "184px"};
          height: ${width ?? "56px"};
          font-size: 16px;
          color: ${theme.color.body};
          margin: ${margin ?? "auto"};
          font-weight: ${fontSize ?? "normal"};
          ${childCSS ?? ""}
        `;
      case TEXT_TYPE.XSMALL:
        return css`
          width: ${width ?? "138px"};
          height: 40px;
          font-size: 12px;
          font-weight: 500;
          margin: ${margin ?? "auto"};
          ${childCSS ?? ""}
        `;
      case TEXT_TYPE.ISSUE:
        return css`
          color: #6e7191;
          text-align: center;
          font-weight: normal;
          font-size: 16px;
          margin: ${margin ?? "auto"};
          ${childCSS ?? ""}
        `;
      default:
        return css``;
    }
  }}
`;
export default Text;
