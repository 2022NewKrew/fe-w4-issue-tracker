import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { COLOR, FILTER_TYPE } from "@constants";
import { SmallText, TextInput, Wrapper } from "@atoms";
import { ChevronDownIcon, SearchIcon } from "@icons";
import Dropdown from "@/components/molecules/Dropdown.js";
import { useRecoilState, useResetRecoilState } from "recoil";
import { filterState } from "@stores";
import { getAuth } from "@/firebase.js";

const FILTER_BAR_DROPDOWN_METADATA = [
  { title: "열린 이슈", filterKey: "isOpened", value: "true" },
  { title: "내가 작성한 이슈", filterKey: "writer", value: "@me" },
  { title: "내게 할당된 이슈", filterKey: "assignee", value: "@me" },
  { title: "내가 댓글을 단 이슈", filterKey: "comment", value: "@me" },
  { title: "닫힌 이슈", filterKey: "isOpened", value: "false" },
];

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
  top: 35px;
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
  const [issueFilter, setIssueFilter] = useRecoilState(filterState);
  const resetIssueFilter = useResetRecoilState(filterState);
  const [activated, setActivated] = useState(false);
  const [filterBarDropdownData, setFilterBarDropdownData] = useState({});
  const filterInput = useRef();
  const dropdownWrapper = useRef();

  useEffect(() => {
    filterInput.current.value = generateTextWithFilter();
    const filterBarDropdownData = generateFilterBarDropdownData();
    setFilterBarDropdownData(filterBarDropdownData);
  }, [issueFilter]);

  const generateTextWithFilter = () => {
    const issueFilterEntries = Object.entries(issueFilter);
    return issueFilterEntries.reduce((text, [key, value]) => {
      if (value === "*") {
        return text;
      }
      return `${text} ${key}:${value}`;
    }, "");
  };

  const interpretTextValue = (value) => {
    const auth = getAuth();
    return value === "@me" ? auth.currentUser.reloadUserInfo.screenName : value;
  };

  const generateFilterBarDropdownData = () => {
    const options = FILTER_BAR_DROPDOWN_METADATA.map((meta) => {
      const { title, filterKey, value } = meta;
      return {
        text: title,
        isChecked: issueFilter[filterKey] === interpretTextValue(value),
        value: {
          key: filterKey,
          value,
        },
      };
    });
    return {
      title: "이슈 필터",
      isCheckIcon: true,
      options: options,
    };
  };

  const clickDropdownPanel = useCallback(
    async (filter) => {
      const { key, value } = filter;
      resetIssueFilter();
      setIssueFilter((prev) => {
        return {
          ...prev,
          isOpened: "*",
          [key]: interpretTextValue(value),
        };
      });
    },
    [issueFilter]
  );

  const focusSearchBar = () => {
    setActivated(true);
  };

  const blurFilterBarTextInput = () => {
    setActivated(false);
  };

  const clickSearchBar = () => {
    filterInput.current.focus();
  };

  const submitSearchForm = useCallback(
    (e) => {
      e.preventDefault();
      const filterText = filterInput.current.value;
      const splittedFilterText = filterText.split(" ");
      resetIssueFilter();
      const generatedFilterFromText = splittedFilterText.reduce(
        (filter, entry) => {
          const [key, value] = entry.split(":");
          if (FILTER_TYPE.indexOf(key) === -1) {
            return filter;
          }
          return { ...filter, [key]: interpretTextValue(value) };
        },
        {}
      );
      console.log(filterText, generatedFilterFromText);
      setIssueFilter(generatedFilterFromText);
    },
    [issueFilter]
  );

  return (
    <FilterBarWrapper isActivated={activated}>
      <FilterDropdownButton ref={dropdownWrapper} isActivated={activated}>
        <FilterDropdownButtonText>필터</FilterDropdownButtonText>
        <ChevronDownIcon />
        <FilterDropdown
          {...filterBarDropdownData}
          parentRef={dropdownWrapper}
          callbackAfterPanelClickEvent={clickDropdownPanel}
        />
      </FilterDropdownButton>
      <FilterSearchWrapper
        isActivated={activated}
        onFocus={focusSearchBar}
        onClick={clickSearchBar}
      >
        <SearchIcon />
        <form onSubmit={submitSearchForm}>
          <FilterTextInput
            placeholder={"Search all issues"}
            ref={filterInput}
            onBlur={blurFilterBarTextInput}
          />
        </form>
      </FilterSearchWrapper>
    </FilterBarWrapper>
  );
}

export default FilterBar;
