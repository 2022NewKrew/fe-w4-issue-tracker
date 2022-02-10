import styled from "@emotion/styled";
import { Size } from "src/@types/emotion";

export interface SProps {
  size: "display" | Size;
}

const Title = styled.h2<SProps>`
  color: var(--titleActive);
  ${({ size }) => sizeList[size]};
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
  `,
  medium: `
  font-size: 1.125rem;
  line-height: 178%;
  `,
  small: `
  `,
};
