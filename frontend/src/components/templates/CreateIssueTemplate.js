import React, { useState } from "react";
import styled from "styled-components";

import { TextInput } from "@components/atoms/textInputs";
import TextArea from "@components/atoms/TextAreas";
import { Sidebar } from "@components/molecules/Sidebars";
import { MediumTextButton, Button } from "@components/atoms/buttons";
import { SmallLink, MediumLink } from "@components/atoms/link";

import { ReactComponent as UserimageLarge } from "@assets/icons/userimageLarge.svg";
import { ReactComponent as XSquare } from "@assets/icons/xsquare.svg";

import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0px 80px;
`;

const Wrapper = styled.div`
  display: flex;

  padding: 32px 0px;
  border-top: 1px solid ${(props) => props.theme.greyscale.line};
  border-bottom: 1px solid ${(props) => props.theme.greyscale.line};
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  padding: 32px 0px;

  a + button {
    margin-left: 8.7px;
  }
`;

const InputContainer = styled.div`
  margin: 0px 32px 0px 16px;
  width: 100%;

  div:first-child {
    margin-bottom: 16px;
  }
`;

export default function CreateIssueTemplate() {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [selectedAssignee, setSelectedAssignee] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState([]);
  const [selectedMilestone, setSelectedMilestone] = useState([]);

  function handleIssueSubmit() {
    console.log(
      title,
      comment,
      selectedAssignee,
      selectedLabel,
      selectedMilestone
    );
    console.log("Submitted!");
  }
  return (
    <Container>
      <Wrapper>
        <UserimageLarge />
        <InputContainer>
          <TextInput
            size='medium'
            text='제목'
            value={title}
            handleValueChange={setTitle}
            className='input'
          />
          <TextArea
            height='343'
            className='textarea'
            placeholder='코멘트를 입력하세요'
            value={comment}
            setValue={setComment}
          />
        </InputContainer>
        <Sidebar
          selectedAssignee={selectedAssignee}
          setSelectedAssignee={setSelectedAssignee}
          selectedLabel={selectedLabel}
          setSelectedLabel={setSelectedLabel}
          selectedMilestone={selectedMilestone}
          setSelectedMilestone={setSelectedMilestone}
        />
      </Wrapper>
      <ButtonWrapper>
        <Link to='/'>
          <MediumTextButton>
            <XSquare />
            <SmallLink>작성 취소</SmallLink>
          </MediumTextButton>
        </Link>
        <Button color='blue' size='medium' onClick={handleIssueSubmit}>
          <MediumLink color='white'>완료</MediumLink>
        </Button>
      </ButtonWrapper>
    </Container>
  );
}
