import styled from "@emotion/styled";

export interface SProps {
  size?: "display" | "large";
  color?: string;
}

const Title = styled.h2<SProps>`
  ${({ theme }) => theme.FontSize.title};
  color: ${({ color }) => color || "var(--titleActive)"};
  ${({ size = "display" }) => sizeList[size]}
`;

export default Title;

const sizeList = {
  display: `
    font-size: 32px;
    line-height: 48px;
  `,
  large: `
    font-size: 24px;
    line-height: 40px;
    color: #000000;
  `,
};
