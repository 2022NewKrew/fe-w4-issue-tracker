import styled from "@emotion/styled";

export interface SProps {
  header?: boolean;
}

const Li = styled.li<SProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ header = false }) =>
    header
      ? `
        background: var(--background);
        `
      : `
        border-top: 1px solid var(--line);
        background: var(--offWhite);
        `};
`;

export default Li;
