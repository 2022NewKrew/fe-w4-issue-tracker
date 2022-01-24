import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 342px;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  svg + button {
    margin-top: 77px;
  }

  p,
  div + button {
    margin: 24px 0;
  }

  div + div {
    margin-top: 16px;
  }
`;
