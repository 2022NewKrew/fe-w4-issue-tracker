import { Dropdown } from "@UI/Molecules";
import Atoms from "@UI/Atoms";

import styled from "@emotion/styled";

import { useCallback, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { issueFilterBarState, selectFilterBarState } from "@recoils/filterbar";

const FilterBar = () => {
  const [focus, setFocus] = useState(false);
  const issueFilterBarList = useRecoilValue(issueFilterBarState);
  const [selectFilterList, setSelectFilterList] =
    useRecoilState(selectFilterBarState);

  const onSelect = useCallback(
    ({ target }: React.MouseEvent<HTMLLIElement>) => {
      const filterId = (target as HTMLLIElement).dataset.id as string;
      if (selectFilterList.includes(filterId)) {
        const newFilter = selectFilterList.filter((ele) => ele !== filterId);
        setSelectFilterList(newFilter);
      } else {
        const newFilter = [...selectFilterList, filterId];
        setSelectFilterList(newFilter);
      }
    },
    [selectFilterList]
  );

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    console.log(e.target.search.value);
    console.log(selectFilterList);
  };

  const onFocus = useCallback(() => setFocus(true), []);
  const onBlur = useCallback(() => setFocus(false), []);

  return (
    <Wrapper className="FilterBar" focus={focus}>
      <Dropdown
        select={selectFilterList}
        onSelect={onSelect}
        indicator="Filter"
        listTitle="이슈 필터"
        direction="left"
        list={issueFilterBarList}
        icon
      />
      <form onSubmit={handleSubmit}>
        <Atoms.Button size="small" shape="text" icon="search" type="submit" />
        <input
          id="search"
          placeholder={focus ? "Search all issues" : "is:issue is:open"}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </form>
    </Wrapper>
  );
};

export default FilterBar;

const Wrapper = styled(Atoms.InputWrapper)<{ focus: boolean }>`
  display: flex;
  width: 601px;
  height: 40px;
  border-radius: 11px;
  border: 1px solid var(--line);
  & > .Dropdown > .Button {
    width: 128px;
    height: 38px;
    padding: 1px 24px 0;
    justify-content: space-between;
    border-radius: 11px 0 0 11px;
    border-right: 1px solid var(--line);
    background: var(--background);
    &:hover:not(:focus) {
      background: var(--line);
    }
  }
  & > form {
    position: relative;
    flex: 1;
    border-radius: 0 11px 11px 0;
    overflow: hidden;
    & > .Button {
      position: absolute;
      width: min-content;
      height: 16px;
      top: 10px;
      left: 24px;
      opacity: ${({ focus }) => (focus ? "1" : "0.5")};
    }
    & > input {
      background: ${({ focus }) =>
        focus ? "var(--offwhite)" : "var(--inputBackground)"};
      width: 100%;
      height: 100%;
      padding: 0 48px;
    }
  }
`;
