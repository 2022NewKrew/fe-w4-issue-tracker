import styled from "@emotion/styled";

export interface SProps {
  type: "panel";
}

const Title = styled.h2<SProps>`
  ${({ type }) => typeList[type]}
`;

export default Title;

const typeList = {
  panel: `
  font-size: 18px;
  line-height: 32px;
  color: var(--titleActive)
  `,
};
