import styled from "@emotion/styled";

const Ul = styled.ul`
  border: 1px solid var(--line);
  border-radius: 16px;
  & > li {
    width: 100%;
  }
  & > li:first-of-type {
    border-radius: 16px 16px 0 0;
  }
  & > li:last-of-type {
    border-radius: 0 0 16px 16px;
  }
`;

export default Ul;
