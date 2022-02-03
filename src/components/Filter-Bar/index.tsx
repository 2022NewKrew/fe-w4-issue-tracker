import React, { useState } from "react";
import styled from "styled-components";
import { Color } from "@/common/designSystem";
import Dropdown, { DropdownItem, DropdownType } from "../Common/Dropdown";
import searchImg from "@/asset/img/search.svg";
import SVG from "react-inlinesvg";

const FilterBar = () => {
  const [issueGroup, setIssueGroup] = useState<DropdownItem[]>([
    {
      type: DropdownType.none,
      itemTitle: "열린이슈",
      isChecked: false,
    },
    {
      type: DropdownType.none,
      itemTitle: "내가 작성한 이슈",
      isChecked: false,
    },
    {
      type: DropdownType.none,
      itemTitle: "나에게 할당된 이슈",
      isChecked: false,
    },
    {
      type: DropdownType.none,
      itemTitle: "내가 댓글을 남긴 이슈",
      isChecked: false,
    },
    {
      type: DropdownType.none,
      itemTitle: "닫힌 이슈",
      isChecked: false,
    },
  ]);

  const clickIssue = (clickItemIndex: number) => {
    const newDropdownGroup = [...issueGroup];
    newDropdownGroup[clickItemIndex].isChecked =
      !newDropdownGroup[clickItemIndex].isChecked;
    setIssueGroup(newDropdownGroup);
  };

  return (
    //TODO 필터창보다 큰 버튼형식에서 필터 리스트 출력 위치 어떻게 조정할지 고민
    //TODO 이슈 필터 적용 값들 + 다른 필터 적용 내용 뿌려줄 방법 고민
    <FilterBarWrapper>
      <FilterWrapper>
        <Dropdown
          dropdownTitle="필터"
          dropdwonGroupTitle="이슈 필터"
          dropdownGroup={issueGroup}
          clickItem={clickIssue}
        ></Dropdown>
      </FilterWrapper>
      <FilterContent>
        <FilterSearchImg src={searchImg} />
      </FilterContent>
    </FilterBarWrapper>
  );
};

const FilterBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  border: 1px solid ${Color.Line};
  border-radius: 11px;
`;

const FilterWrapper = styled.div`
  padding-left: 24px;
  padding-right: 28px;
  width: 76px;
`;

const FilterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding-left: 26px;

  width: 472px;
  height: 40px;

  background: ${Color.InputBackground};
`;

const FilterSearchImg = styled(SVG)`
  margin-right: 10px;
  & path {
    stroke: ${Color.Placeholder};
  }
`;

export default FilterBar;
