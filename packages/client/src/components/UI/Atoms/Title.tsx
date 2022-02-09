import styled from "@emotion/styled";

export interface SProps {
  type?: "title" | "panel" | "issueList";
}

const Title = styled.h2<SProps>`
  ${({ type = "title" }) => typeList[type]};
  color: var(--titleActive);
`;

export default Title;

const typeList = {
  title: `
  font-size: 32px;
  line-height: 48px;
  height: 48px;
  align-self: flex-start;
  `,
  panel: `
  font-size: 18px;
  line-height: 32px;
  `,
  issueList: `
  font-size: 1.125rem;
  line-height: 178%;
  height:32px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  position: relative;
  font-weight: bold;
  svg {
    top: 5px;
    left: 0;
  }
  label {
    margin-left: 8px;
  }
  `,
};
