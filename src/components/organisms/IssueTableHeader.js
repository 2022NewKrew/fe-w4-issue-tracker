import React from "react";
import styled from "styled-components";

import { DropdownIndicators } from "@components/molecules/dropdownIndicators";
import { LargeLabel } from "@components/molecules/Labels";
import { ReactComponent as CheckboxInitial } from "@assets/icons/checkboxInitial.svg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%:
  height: 64px;
  padding: 0 30px;

  background-color: ${(props) => props.theme.greyscale.background};

  button {
    display: flex;
    align-items: center;
    svg {
      margin-right: 7.33px;
    }
  }
`;

const IndicatorsContainer = styled.div`
  display: flex;
  align-items: center;

  div + div {
    margin-left: 36px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  svg + div {
    margin-left: 32px;
  }

  div + div {
    margin-left: 24px;
  }
`;

export default function IssueTableHeader() {
  return (
    <HeaderContainer>
      <Wrapper>
        <CheckboxInitial />
        <LargeLabel type='open' />
        <LargeLabel type='closed' />
      </Wrapper>

      <IndicatorsContainer>
        <DropdownIndicators text='담당자' />
        <DropdownIndicators text='레이블' />
        <DropdownIndicators text='마일스톤' />
        <DropdownIndicators text='작성자' />
      </IndicatorsContainer>
    </HeaderContainer>
  );
}
