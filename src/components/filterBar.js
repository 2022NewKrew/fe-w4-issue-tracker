import React, { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 601px;
  height: 40px;

  display: flex;

  border: 1px solid ${(props) => props.theme.greyscale.line};
`;

function filterBar() {
  return <Container></Container>;
}
