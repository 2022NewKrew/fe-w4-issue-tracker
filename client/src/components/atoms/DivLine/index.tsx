import React from "react";
import styled, { css } from "styled-components";

interface IDivLine {
  styles?: {
    width?: string;
    background?: string;
    margin?: string;
  };
}
const DivLine: React.FC<IDivLine> = ({ styles }) => {
  const DivLineProps = {
    ...styles,
  };
  return <DivLineWrap {...DivLineProps} />;
};

const DivLineWrap = styled.div<any>`
  ${({ width, background, margin }) => css`
    width: ${width ?? "100%"};
    height: 1px;
    background: ${background ?? "#d9dbe9"};
    margin: ${margin ?? "32px 0px 32px 0px"};
  `}
`;
export default DivLine;
