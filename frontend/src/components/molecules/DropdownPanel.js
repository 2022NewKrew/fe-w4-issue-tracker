import React, { useState } from "react";
import styled from "styled-components";

import { MediumText, SmallText } from "@components/atoms/Text";
import { ReactComponent as UserimageSmall } from "@assets/icons/userimageSmall.svg";
import { ReactComponent as CheckoffCircle } from "@assets/icons/checkoffCircle.svg";
import { ReactComponent as CheckonCircle } from "@assets/icons/checkonCircle.svg";

const Container = styled.div`
  position: absolute;

  width: 240px;
  box-sizing: border-box;

  overflow: hidden;

  border: 1px solid ${(props) => props.theme.greyscale.line};
  border-radius: 16px;

  z-index: 100;

  top: ${(props) => (props.position === "right" ? 45 : null)}px;
  right: ${(props) => (props.position === "right" ? 0 : null)}px;
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
  const selectedMenus = props.selected;
  const setSelectedMenus = props.setSelected;

  function handleClick(id, clickedMenu) {
    if (type === "modify") {
      setSelectedMenus(clickedMenu);
      // 선택 시 해당 패널 닫기
      props.setShowPanel({
        ...props.showPanel,
        [props.name]: !props.showPanel[props.name],
      });
    } else {
      if (selectedMenus && selectedMenus.includes(clickedMenu)) {
        const selectedMenusWihtoutRedundancy = selectedMenus.filter(
          (menu) => menu !== clickedMenu
        );
        setSelectedMenus(selectedMenusWihtoutRedundancy);
      } else {
        setSelectedMenus([...selectedMenus, clickedMenu]);
      }
    }
  }

  function showSelectionIcon(type, menu) {
    if (type !== "modify") {
      if (selectedMenus && selectedMenus.includes(menu)) {
        return <CheckonCircle />;
      } else {
        return <CheckoffCircle />;
      }
    } else {
      return null;
    }
  }

  if (props.show) {
    return (
      <Container position={props.position}>
        <Header>
          <MediumText color='titleActive'>{props.header}</MediumText>
        </Header>
        {props.menus.map((menu, id) => {
          return (
            <ItemContainer key={menu.id} onClick={() => handleClick(id, menu)}>
              <ImageTextContainer>
                {type === "image" ? <UserimageSmall /> : null}
                <SmallText>{menu.name}</SmallText>
              </ImageTextContainer>
              {showSelectionIcon(type, menu)}
            </ItemContainer>
          );
        })}
      </Container>
    );
  } else {
    return "";
  }
}
