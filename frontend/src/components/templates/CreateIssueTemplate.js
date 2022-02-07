import React, { useState } from "react";
import styled from "styled-components";

import { TextInput } from "@components/atoms/textInputs";
import TextArea from "@components/atoms/TextAreas";
import { Sidebar } from "@components/molecules/Sidebars";

import { ReactComponent as UserimageLarge } from "@assets/icons/userimageLarge.svg";

const Container = styled.div`
  display: flex;
  margin: 0px 80px;
  padding: 32px 0px;

  border-top: 1px solid ${(props) => props.theme.greyscale.line};
  border-bottom: 1px solid ${(props) => props.theme.greyscale.line};
`;

const InputContainer = styled.div`
  margin: 0px 32px 0px 16px;
  width: 100%;
`;

export default function CreateIssueTemplate(props) {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  return (
    <Container>
      <UserimageLarge />
      <InputContainer>
        <TextInput
          size='medium'
          text='제목'
          value={title}
          handleValueChange={setTitle}
        />
        <TextArea
          height='343'
          className='textarea'
          placeholder='코멘트를 입력하세요'
        />
      </InputContainer>
      <Sidebar />
    </Container>
  );
}
