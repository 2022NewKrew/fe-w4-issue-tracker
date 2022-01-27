import React from "react";
import { Button, TextInput } from "@/components/atoms";
import { CommentTextArea } from "@/components/molecules";
import { theme } from "@/styles/theme";
import styled from "styled-components";
import { IconRefresh } from "@/components/atoms/Icons";

const Component: React.FC = props => {
  return (
    <ComponentWrap>
      <Button type="large"></Button>
      <Button type="mediumStandard"></Button>
      <Button type="smallSecondary" styles={{ iconColor: theme.color.primary }}></Button>
      <Button type="smallStandard"></Button>
      <Button type="textMedium" styles={{ iconColor: theme.color.label }}></Button>
      <Button type="textSmall" styles={{ iconColor: theme.color.label }}></Button>
      <TextInput type="large" name="아이디"></TextInput>
      <TextInput type="medium" name="제목"></TextInput>
      <TextInput type="small" name="제목"></TextInput>
      <TextInput type="colorCode" name="Label" icon={IconRefresh}></TextInput>
      <CommentTextArea name="코멘트를 입력하세요"></CommentTextArea>
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
