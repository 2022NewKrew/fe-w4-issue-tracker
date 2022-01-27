import React, { useState } from "react";
import styled from "styled-components";
import { Size } from "@/common/designSystem";
import Input, { CheckState } from "./Input";
import Button, { ButtonMode } from "./Button";
import CommentTextArea from "./CommentTextArea";
import Dropdown, { DropdownItem, DropdownType, FixPoint } from "./Dropdown";

const Common = () => {
  //TODO: 테스트화면에 테스트 값
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("Success");
  const [inputValue3, setInputValue3] = useState("Fail");
  const [inputValue4, setInputValue4] = useState("123456");
  const [textAreaValue, setTextAreaValue] = useState("");

  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };
  //TODO 서버 구성 시 연동 예정
  const addFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      console.log(event.target.files[0]);
    }
  };
  const returnLengthAboveSix = () => {
    if (inputValue4 === "") {
      return CheckState.None;
    }
    return inputValue4.length >= 6 ? CheckState.Success : CheckState.Fail;
  };
  const stateMessage = () => {
    switch (returnLengthAboveSix()) {
      case CheckState.Success:
        return "6자리 이상입니다!";
      case CheckState.Fail:
        return "6자리 이하입니다!";
      case CheckState.None:
        return "";
    }
  };
  const inputValue1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(event.target.value);
  };

  const inputValue2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

  const inputValue3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue3(event.target.value);
  };

  const inputValue4Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue4(event.target.value);
  };

  const [dropdownGroup, setDropdownGroup] = useState<DropdownItem[]>([
    {
      type: DropdownType.none,
      itemTitle: "필터1",
      isChecked: false,
    },
    {
      type: DropdownType.none,
      itemTitle: "필터2",
      isChecked: false,
    },
    {
      type: DropdownType.none,
      itemTitle: "필터3",
      isChecked: false,
    },
  ]);

  const [dropdownGroup2, setDropdownGroup2] = useState<DropdownItem[]>([
    {
      type: DropdownType.none,
      itemTitle: "필터4",
      isChecked: false,
    },
    {
      type: DropdownType.none,
      itemTitle: "필터5",
      isChecked: false,
    },
    {
      type: DropdownType.none,
      itemTitle: "필터6",
      isChecked: false,
    },
  ]);

  const clickItem = (clickItemIndex: number) => {
    const newDropdownGroup = [...dropdownGroup];
    newDropdownGroup[clickItemIndex].isChecked =
      !newDropdownGroup[clickItemIndex].isChecked;
    setDropdownGroup(newDropdownGroup);
  };

  const clickItem2 = (clickItemIndex: number) => {
    const newDropdownGroup = [...dropdownGroup2];
    newDropdownGroup[clickItemIndex].isChecked =
      !newDropdownGroup[clickItemIndex].isChecked;
    setDropdownGroup2(newDropdownGroup);
  };

  return (
    <Wrapper>
      <DropdownWrapper>
        <Dropdown
          dropdownTitle="Filter"
          dropdwonGroupTitle="이슈 필터"
          dropdownGroup={dropdownGroup}
          clickItem={clickItem}
        ></Dropdown>
        <Dropdown
          dropdownTitle="마일스톤 12"
          dropdwonGroupTitle="이슈 필터2"
          dropdownGroup={dropdownGroup2}
          clickItem={clickItem2}
          dropdownPopupFixPoint={FixPoint.right}
        ></Dropdown>
      </DropdownWrapper>

      <CommentTextArea
        textAreaValue={textAreaValue}
        onChange={textAreaChange}
        addFile={addFile}
      />
      <Input
        inputSize={Size.Large}
        placeholder="아이디"
        inputValue={inputValue1}
        onChange={inputValue1Change}
      />
      <Input
        inputSize={Size.Medium}
        placeholder="아이디"
        inputValue={inputValue1}
        onChange={inputValue1Change}
      />
      <Input
        inputSize={Size.Small}
        placeholder="아이디"
        inputValue={inputValue1}
        onChange={inputValue1Change}
      />
      <Input
        inputSize={Size.Medium}
        placeholder="제목"
        inputValue={inputValue2}
        onChange={inputValue2Change}
        textCheckResult={CheckState.Success}
      />
      <Input
        inputSize={Size.Small}
        placeholder="완료일(선택)"
        inputValue={inputValue3}
        onChange={inputValue3Change}
        textCheckResult={CheckState.Fail}
      />

      <Input
        inputSize={Size.Small}
        placeholder="6자리이상이면성공"
        inputValue={inputValue4}
        onChange={inputValue4Change}
        textCheckResult={returnLengthAboveSix()}
        textCheckMessage={stateMessage()}
      />

      <Button />
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
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 10px;
`;

const DropdownWrapper = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 200px; */
`;
export default Common;
