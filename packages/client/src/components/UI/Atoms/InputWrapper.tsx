import styled from "@emotion/styled";

const InputWrapper = styled.div`
  position: relative;
  background: var(--inputBackground);
  :focus-within {
    background: var(--offWhite);
    border: 1px solid var(--titleActive);
  }
  & > * {
    background: transparent;
  }
`;

export default InputWrapper;
