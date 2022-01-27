import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Color } from "@/common/designSystem";
import logo from "@/asset/img/dropdown.svg";
import checkOffImg from "@/asset/img/check-off-circle.svg";
import checkOnImg from "@/asset/img/check-on-circle.svg";
export interface DropdownItem {
  type: DropdownType;
  itemTitle: string;
  labelColor?: string;
  assignImgSrc?: string;
  isChecked: boolean;
}

export enum DropdownType {
  assign,
  label,
  none,
}

export enum FixPoint {
  right,
  left,
}

interface DropdownProps {
  dropdownTitle: string;
  dropdwonGroupTitle: string;
  dropdownGroup: DropdownItem[];
  dropdownPopupFixPoint?: FixPoint;
  clickItem: (index: number) => void;
}

const Dropdown: FunctionComponent<DropdownProps> = ({
  dropdownTitle,
  dropdownGroup,
  dropdwonGroupTitle,
  dropdownPopupFixPoint = FixPoint.left,
  clickItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownClick = () => setIsOpen(!isOpen);
  const dropdownItemClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const dropdownItem = (event.target as HTMLElement).closest(".DropdownItem");

    if (!dropdownItem) {
      return;
    }
    const dropdownItemKey = (dropdownItem as HTMLElement).dataset["key"];
    if (!dropdownItemKey) {
      return;
    }
    clickItem(parseInt(dropdownItemKey));
  };
  const isCheckedImg = (isChecked: boolean) => {
    return isChecked ? checkOnImg : checkOffImg;
  };
  const ref = useRef<HTMLDivElement>(null);
  const checkClickOutside = (event: MouseEvent) => {
    if (isOpen && ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", checkClickOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkClickOutside);
    };
  }, [isOpen]);

  const dropdownGroupForm = dropdownGroup.map((dropdownItem, index) => (
    <DropdownItem className="DropdownItem" key={index} data-key={index}>
      {dropdownItem.itemTitle}
      <DropdownImg src={isCheckedImg(dropdownItem.isChecked)} />
    </DropdownItem>
  ));
  return (
    <Wrapper ref={ref}>
      <DropdownTitleWrapper onClick={dropdownClick}>
        <DropdownTitle>{dropdownTitle}</DropdownTitle>
        <DropdownImg src={logo} />
      </DropdownTitleWrapper>
      <DropdownGroupWrapper
        isOpen={isOpen}
        dropdownPopupFixPoint={dropdownPopupFixPoint}
        onClick={dropdownItemClick}
      >
        <DropdownGroupTitle>{dropdwonGroupTitle}</DropdownGroupTitle>
        {dropdownGroupForm}
      </DropdownGroupWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 5px; //TODO: 테스트용 값 변경 예장
  width: 50px;
  position: relative;
`;

const DropdownTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  color: ${Color.Label};
  &:hover {
    color: ${Color.Body};
  }
`;

const DropdownTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DropdownImg = styled.img``;

const DropdownGroupWrapper = styled.div<{
  isOpen: boolean;
  dropdownPopupFixPoint: FixPoint;
}>`
  z-index: 1;
  position: absolute;
  ${(props) =>
    props.dropdownPopupFixPoint === FixPoint.left ? "left:0px;" : "right:0px;"}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  background: ${Color.Line};
  border: 1px solid ${Color.Line};
  border-radius: 16px;
  width: 240px;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

const DropdownGroupTitle = styled.div`
  width: 100%;
  height: 48px;
  background: ${Color.Background};
  border-radius: 16px 16px 0px 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 1px 0px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  box-sizing: border-box;
`;

const DropdownItem = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: ${Color.offWhite};
  box-sizing: border-box;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 1px 0px;

  &:last-child {
    border-radius: 0px 0px 16px 16px;
  }
`;
export default Dropdown;
