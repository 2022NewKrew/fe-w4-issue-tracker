import React from "react";
import styled, { css } from "styled-components";
import { TEXT_TYPE } from "@/constants/type";
import { theme } from "@/styles/theme";

type TextType = "large" | "medium" | "small" | "xsmall";
interface ITextProps {
  type: TextType;
  styles?: {
    margin?: string;
    padding?: string;
    textAlign?: string;
    childCSS?: any;
  };
  className?: string;
}

const Text: React.FC<ITextProps> = ({ type, ...props }) => {
  const StyledTextProps = {
    type,
    ...props,
  };
  return <StyledText {...StyledTextProps}></StyledText>;
};

const StyledText = styled.div<any>`
  ${({ type, styles }) => {
    switch (type) {
      case TEXT_TYPE.LARGE:
        return css`
          width: 276px;
          height: 80px;
          font-size: 24px;
          line-height: 40px;
          color: ${theme.color.body};
          margin: ${styles.margin};
          ${styles.childCSS}
        `;
      case TEXT_TYPE.MEDIUM:
        return css`
          width: 207px;
          height: 64px;
          font-size: 18px;
          color: ${theme.color.body};
          margin: ${styles.margin};
          ${styles.childCSS}
        `;
      case TEXT_TYPE.SMALL:
        return css`
          width: 184px;
          height: 56px;
          font-size: 16px;
          color: ${theme.color.body};
          margin: ${styles.margin};
          ${styles.childCSS}
        `;
      case TEXT_TYPE.XSMALL:
        return css`
          width: 138px;
          height: 40px;
          font-size: 12px;
          font-weight: 500;
          margin: ${styles.margin};
          ${styles.childCSS}
        `;
      default:
        return css``;
    }
  }}
`;
export default Text;
