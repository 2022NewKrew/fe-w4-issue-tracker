import React, { useState } from "react";
import styled, { css } from "styled-components";
import { XSmallText, SmallText } from "@components/atoms/Text";
import { ReactComponent as CheckoffCircle } from "@assets/icons/checkoffCircle.svg";
import { ReactComponent as CheckonCircle } from "@assets/icons/checkonCircle.svg";

export const Container = styled.div`
  /* width: 352px; */
  display: flex;

  .radioContainer + .radioContainer {
    margin-left: 9.33px;
  }

  p:first-child {
    width: 40px;
    margin-left: 24px;
    margin-right: 9.33px;

    display: flex;
    align-items: center;
  }

  svg {
    cursor: pointer;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 9.33px;

  p {
    margin-left: 9.33px;
  }
`;

export function RadioOption(props) {
  const [selectedValue, setSelectedValue] = useState(props.options[0]);

  function handleCircleClick(selectedOption) {
    setSelectedValue(selectedOption);
  }

  function checkSelected(option) {
    if (selectedValue === option) {
      return (
        <>
          <CheckonCircle
            color='#14142b'
            onClick={() => handleCircleClick(option)}
          />
          <SmallText color='titleActive'>{option}</SmallText>
        </>
      );
    } else {
      return (
        <>
          <CheckoffCircle
            color='#4e4b66'
            onClick={() => handleCircleClick(option)}
          />
          <SmallText color='body'>{option}</SmallText>
        </>
      );
    }
  }

  return (
    <Container>
      <XSmallText>{props.label}</XSmallText>
      {props.options.map((option) => (
        <RadioContainer key={option}>{checkSelected(option)}</RadioContainer>
      ))}
    </Container>
  );
}
