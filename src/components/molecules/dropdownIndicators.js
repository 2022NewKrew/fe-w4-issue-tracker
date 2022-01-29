import React from "react";

import styled, { css } from "styled-components";
import { ReactComponent as Down } from "@assets/icons/down.svg";

const Container = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  * + * {
    margin-left: 8px;
  }
`;

const Text = styled.p`
  color: ${(props) => props.theme.greyscale.label};

  ${Container}:hover >  & {
    color: ${(props) => props.theme.greyscale.body};
  }
`;

export function DropdownIndicators(props) {
  function handleStatusChangePanel() {
    props.setShowStatusChangePanel(!props.showStatusChangePanel);
  }
  return (
    <Container onClick={() => handleStatusChangePanel()}>
      <Text>{props.text}</Text>
      <Down />
    </Container>
  );
}
