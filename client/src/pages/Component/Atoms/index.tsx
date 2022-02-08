import {
  Button,
  TextInput,
  Indicator,
  Tab,
  FilterBar,
  Label,
  SideBar,
  Radio,
  Progress,
  Comment,
} from "@/components/atoms";
import { theme } from "@/styles/theme";
import { IconRefresh } from "@/components/atoms/Icons";
import React from "react";

const Atoms: React.FC = () => {
  return (
    <>
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
      <Indicator>Filter</Indicator>
      <Tab></Tab>
      <FilterBar></FilterBar>
      <Label type="large-open"></Label>
      <Label type="large-close"></Label>
      <Label type="small-dark">레이블 이름</Label>
      <Label type="small-light">레이블 이름</Label>
      <Label type="small-line">작성자</Label>
      <SideBar></SideBar>
      <Radio></Radio>
      <Progress value={50} max={100}></Progress>
      <Comment commentContent="코멘트는 이렇게 보여집니다."></Comment>
      <Comment
        commentContent="코멘트는 이렇게 보여집니다."
        styles={{ titleBackground: "#CCD4FF", borderColor: "#0025E7" }}
      ></Comment>
      <Comment
        commentContent="코멘트는 이렇게 보여집니다."
        styles={{ titleBackground: "#C7EBFF", borderColor: "#007AFF" }}
      ></Comment>
    </>
  );
};

export default Atoms;
