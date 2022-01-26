import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { COLOR } from "@constants/";
import { SmallText, TextInput } from "@atoms/";
import ChevronDown from "@icons/chevron-down.svg";
import Search from "@icons/search.svg";

const FilterBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
      <FilterDropdownButton isActivated={activated}>
        <FilterDropdownButtonText>필터</FilterDropdownButtonText>
        <ChevronDown />
      </FilterDropdownButton>
      <FilterSearchWrapper
        isActivated={activated}
        onFocus={handleFocus}
        onClick={handleClick}
      >
        <Search />
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
