import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Size, ButtonMode, CheckState } from "@/ts/enum";
import Input from "./Input";
import TextArea from "./TextArea";
const common = () => {
  //TODO: 테스트화면에 테스트 값
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("Success");
  const [inputValue3, setInputValue3] = useState("Fail");
  const [inputValue4, setInputValue4] = useState("123456");
  const returnSuccess = (message: string) => CheckState.Success;
  const returnFail = (message: string) => CheckState.Fail;
  const returnLengthAboveSix = (message: string) => {
    if (message === "") {
      return CheckState.None;
    }
    return message.length >= 6 ? CheckState.Success : CheckState.Fail;
  };
  const stateMessage = (state: CheckState) => {
    switch (state) {
      case CheckState.Success:
        return "6자리 이상입니다!";
      case CheckState.Fail:
        return "6자리 이하입니다!";
      case CheckState.None:
        return "";
    }
  };
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

      <Input
        inputSize={Size.Large}
        placeholder="아이디"
        inputValue={inputValue1}
        setInputValue={setInputValue1}
      />
      <Input
        inputSize={Size.Medium}
        placeholder="아이디"
        inputValue={inputValue1}
        setInputValue={setInputValue1}
      />
      <Input
        inputSize={Size.Small}
        placeholder="아이디"
        inputValue={inputValue1}
        setInputValue={setInputValue1}
      />
      <Input
        inputSize={Size.Medium}
        placeholder="제목"
        inputValue={inputValue2}
        setInputValue={setInputValue2}
        textCheckResult={returnSuccess}
      />
      <Input
        inputSize={Size.Small}
        placeholder="완료일(선택)"
        inputValue={inputValue3}
        setInputValue={setInputValue3}
        textCheckResult={returnFail}
      />

      <Input
        inputSize={Size.Small}
        placeholder="6자리이상이면성공"
        inputValue={inputValue4}
        setInputValue={setInputValue4}
        textCheckResult={returnLengthAboveSix}
        textCheckMessage={stateMessage}
      />
      <TextArea />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default common;
