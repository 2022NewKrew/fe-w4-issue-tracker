import React from "react";
import styled from "styled-components";

import { ReactComponent as CheckboxInitial } from "@assets/icons/checkboxInitial.svg";
import { ReactComponent as AlertCircle } from "@assets/icons/alertCircle.svg";
import { ReactComponent as Milestone } from "@assets/icons/milestone.svg";
import { ReactComponent as UserimageSmall } from "@assets/icons/userimageSmall.svg";
import { MediumLink } from "@components/atoms/link";
import { SmallLabel } from "@components/molecules/Labels";
import { SmallText } from "@components/atoms/Text";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: inherit;
  height: 80px;
  padding: 0 30px;

  background-color: ${(props) => props.theme.greyscale.offWhite};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  padding-left: 33.33px;
`;

const IssueTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  svg + p {
    margin-left: 9.33px;
  }

  p + div {
    margin-left: 8px;
  }
`;

const IssueInfoWrapper = styled.div`
  display: flex;
  align-items: center;

  p:first-child {
    margin-left: ;
  }

  p + p {
    margin-left: 16px;
  }

  svg {
    margin-right: 8px;
  }
`;

export default function IssueTableCell(props) {
  const { id, title, label, author, milestone, date } = props.info;
  const color = "#004DE3";
  return (
    <Container>
      <Wrapper>
        <CheckboxInitial />
        <ContentWrapper>
          <IssueTitleWrapper>
            <AlertCircle color='#007AFF' />
            <MediumLink>{title}</MediumLink>
            <SmallLabel type='light' color={color} text={label} />
          </IssueTitleWrapper>
          <IssueInfoWrapper>
            <SmallText color='label'>#{id}</SmallText>
            <SmallText color='label'>
              이 이슈가 {date}에, {author} 님에 의해 작성되었습니다.
            </SmallText>
            <SmallText color='label'>
              <Milestone />
              {milestone}
            </SmallText>
          </IssueInfoWrapper>
        </ContentWrapper>
      </Wrapper>

      <UserimageSmall />
    </Container>
  );
}
