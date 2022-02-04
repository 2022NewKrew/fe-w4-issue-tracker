import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { COLOR } from "@constants";
import { SmallText, TextInput, Wrapper } from "@atoms";
import { ChevronDownIcon, SearchIcon } from "@icons";
import Dropdown from "@/components/molecules/Dropdown.js";

const filterBarDropdownData = {
  title: "이슈 필터",
  isMultipleOptionsAvailable: true,
  options: [
    {
      text: "열린 이슈",
    },
    {
      text: "내가 작성한 이슈",
    },
    {
      text: "나에게 할당된 이슈",
    },
    {
      text: "내가 댓글을 남긴 이슈",
    },
    {
      text: "닫힌 이슈",
    },
  ],
};

const FilterBarWrapper = styled(Wrapper)`
  position: relative;
  flex-direction: row;

  border: 1px solid transparent;

  ${({ isActivated }) =>
    isActivated
      ? css`
          border-color: ${COLOR.GREYSCALE.TITLE_ACTIVE};
        `
      : css`
          border-color: ${COLOR.GREYSCALE.LINE};
        `}

  border-radius: 11px;
`;

const FilterDropdownButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 128px;
  height: 40px;
  border: 1px solid transparent;

  ${({ isActivated }) =>
    isActivated
      ? css`
          background: ${COLOR.GREYSCALE.OFF_WHITE};
        `
      : css`
          background: ${COLOR.GREYSCALE.BACKGROUND};
        `}
  border-radius: 11px 0px 0px 11px;

  &:hover {
    background: ${COLOR.GREYSCALE.LINE};
  }
`;

const FilterDropdownButtonText = styled(SmallText)`
  width: 56px;
  height: 28px;
  left: 24px;
  top: 6px;
  font-weight: bold;
  color: ${COLOR.GREYSCALE.LABEL};
`;

const FilterDropdown = styled(Dropdown)`
  position: absolute;
  left: 0;
  top: 40px;
`;

const FilterTextInput = styled(TextInput)`
  width: 400px;
  height: 28px;
  padding: 0 10px;
  color: ${COLOR.GREYSCALE.LABEL};
  &:focus {
    outline: none;
    border: 2px solid transparent;
    background-color: ${COLOR.GREYSCALE.OFF_WHITE};
  }
`;

const FilterSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 472px;
  height: 40px;
  ${({ isActivated }) =>
    isActivated
      ? css`
          background: ${COLOR.GREYSCALE.OFF_WHITE};
        `
      : css`
          background: ${COLOR.GREYSCALE.INPUT_BACKGROUND};
        `}
  border-radius: 0px 11px 11px 0px;
  border-left: 1px solid ${COLOR.GREYSCALE.LINE};
`;

function FilterBar() {
  const [activated, setActivated] = useState(false);
  const filterInput = useRef();
  const dropdownWrapper = useRef();

  useEffect(() => {
    filterInput.current.value = "is:issue is:open";
  }, []);

  const handleFocus = () => {
    setActivated(true);
  };

  const handleBlur = () => {
    setActivated(false);
  };

  const handleClick = () => {
    filterInput.current.focus();
  };

  return (
    <FilterBarWrapper isActivated={activated}>
      <FilterDropdownButton ref={dropdownWrapper} isActivated={activated}>
        <FilterDropdownButtonText>필터</FilterDropdownButtonText>
        <ChevronDownIcon />
        <FilterDropdown
          {...filterBarDropdownData}
          parentRef={dropdownWrapper}
        />
      </FilterDropdownButton>
      <FilterSearchWrapper
        isActivated={activated}
        onFocus={handleFocus}
        onClick={handleClick}
      >
        <SearchIcon />
        <FilterTextInput
          placeholder={"Search all issues"}
          ref={filterInput}
          onBlur={handleBlur}
        />
      </FilterSearchWrapper>
    </FilterBarWrapper>
  );
}

export default FilterBar;
