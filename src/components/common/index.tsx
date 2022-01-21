import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Size, ButtonMode } from "@/ts/enum";

const common = () => {
  return (
    <Wrapper>
      <Button
        buttonMode={ButtonMode.Standard}
        buttonSize={Size.Large}
        message="BUTTON"
      />
      <Button
        buttonMode={ButtonMode.Standard}
        buttonSize={Size.Medium}
        message="BUTTON"
      />
      <Button
        buttonMode={ButtonMode.Standard}
        buttonSize={Size.Small}
        message="BUTTON"
      />
      <Button
        buttonMode={ButtonMode.Secondary}
        buttonSize={Size.Medium}
        message="BUTTON"
      />
      <Button
        buttonMode={ButtonMode.Secondary}
        buttonSize={Size.Small}
        message="BUTTON"
      />
      <Button
        buttonMode={ButtonMode.Text}
        buttonSize={Size.Medium}
        message="+ BUTTON"
      />
      <Button
        buttonMode={ButtonMode.Text}
        buttonSize={Size.Small}
        message="+ BUTTON"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

export default common;
