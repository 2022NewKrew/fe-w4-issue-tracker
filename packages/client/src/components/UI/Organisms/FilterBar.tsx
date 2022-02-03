import { Dropdown } from "@UI/Molecules";
import Icon from "@UI/Icon";
import Atoms from "@UI/Atoms";

import styled from "@emotion/styled";

import { useState } from "react";

const filterList = [
  "열린 이슈",
  "내가 작성한 이슈",
  "나에게 할당된 이슈",
  "내가 댓글을 남긴 이슈",
  "닫힌 이슈",
];

const FilterBar = () => {
  const [focus, setFocus] = useState(false);

  const handleSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    console.log(e.target.search.value);
  };

  return (
    <Wrapper className="FilterBar" focus={focus}>
      <Dropdown
        indicator="Filter"
        listTitle="이슈 필터"
        direction="left"
        list={filterList}
        icon
      />
      <form onSubmit={handleSubmit}>
        <Icon name="search" />
        <input
          id="search"
          placeholder={focus ? "Search all issues" : "is:issue is:open"}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        ></input>
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
    & > input {
      background: ${({ focus }) =>
        focus ? "var(--offwhite)" : "var(--inputBackground)"};
      width: 100%;
      height: 100%;
      padding: 0 48px;
    }
    & > svg {
      top: 10px;
      left: 24px;
      opacity: ${({ focus }) => (focus ? "1" : "0.5")};
    }
  }
`;
