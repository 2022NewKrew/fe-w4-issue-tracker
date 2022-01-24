import React from "react";
import { Button, Input } from "@/components/atoms";
import { ContentTextArea } from "@/components/molecules";
import styled from "styled-components";

const Component: React.FC = props => {
  return (
    <ComponentWrap>
      <Button type="large" name="BUTTON"></Button>
      <Button type="mediumStandard" name="BUTTON"></Button>
      <Button type="smallSecondary" name="BUTTON"></Button>
      <Button type="smallStandard" name="BUTTON"></Button>
      <Button type="textMedium" name="BUTTON"></Button>
      <Button type="textSmall" name="BUTTON"></Button>
      <Input type="large" name="아이디"></Input>
      <Input type="medium" name="제목"></Input>
      <Input type="small" name="제목"></Input>
      <ContentTextArea name="코멘트를 입력하세요"></ContentTextArea>
    </ComponentWrap>
  );
};

const ComponentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > * {
    margin-top: 25px;
    margin-left: 10px;
  }
`;
export default Component;
