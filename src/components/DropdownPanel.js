import React, { useState } from "react";
import styled, { css } from "styled-components";

import { MediumText, SmallText } from "@components/Text";
import { ReactComponent as UserimageSmall } from "../assets/icons/userimageSmall.svg";
import { ReactComponent as CheckoffCircle } from "../assets/icons/checkoffCircle.svg";
import { ReactComponent as CheckonCircle } from "../assets/icons/checkonCircle.svg";

const Container = styled.div`
  width: 240px;
  box-sizing: border-box;

  overflow: hidden;

  border: 1px solid ${(props) => props.theme.greyscale.line};
  border-radius: 16px;
`;

const Header = styled.div`
  height: 48px;
  padding: 8px 16px;
  box-sizing: border-box;

  background-color: ${(props) => props.theme.greyscale.background};
`;

const ItemContainer = styled.div`
  height: 44px;
  padding: 8px 16px;
  box-sizing: border-box;
  border-top: 1px solid ${(props) => props.theme.greyscale.line};

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  background-color: ${(props) => props.theme.greyscale.offWhite};

  /* svg:last-child {
    cursor: pointer;
  } */
`;

const ImageTextContainer = styled.div`
  display: flex;
  align-items: center;

  svg + p {
    margin-left: 8px;
  }
`;

export function DropdownPanel(props) {
  const type = props.type;
  const [selected, setSelected] = useState(null);

  function handleClick(id) {
    setSelected(id);
    console.log(selected, id);
  }

  function showSelectionIcon(type, id) {
    if (type !== "modify") {
      if (id === selected) {
        return <CheckonCircle />;
      } else {
        return <CheckoffCircle />;
      }
    } else {
      return null;
    }
  }

  return (
    <Container>
      <Header>
        <MediumText color='titleActive'>{props.header}</MediumText>
      </Header>
      {props.menus.map((menu, id) => {
        return (
          <ItemContainer key={id} onClick={() => handleClick(id)}>
            <ImageTextContainer>
              {type === "image" ? <UserimageSmall /> : null}
              <SmallText>{menu.name}</SmallText>
            </ImageTextContainer>
            {showSelectionIcon(type, id)}
          </ItemContainer>
        );
      })}
    </Container>
  );
}
