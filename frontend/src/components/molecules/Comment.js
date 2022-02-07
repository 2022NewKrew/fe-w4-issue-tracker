import React from "react";
import styled from "Styled-components";

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.greyscale.line};
  border-radius: 16px;
`;

const Header = styled.div`
  height: 64px;
  background-color: ${(props) => props.theme.greyscale.background};
`;

export function Comment() {
  return (
    <Container>
      <Header></Header>
    </Container>
  );
}
