import { Dropdown } from "@UI/Molecules";
import Icon from "@styles/Icon";

import { useState } from "react";

import styled from "@emotion/styled";
import Atoms from "@UI/Atoms";

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
    <Wrapper focus={focus}>
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
  border: 1px solid var(--line);
  border-radius: 11px;
  overflow: hidden;
  & > div > button {
    width: 128px;
    min-height: 40px;
    height: 100%;
    padding: 0 24px;
    justify-content: space-between;
    :hover {
      background: var(--line);
    }
  }
  & > form {
    position: relative;
    flex: 1;
    border-left: 1px solid var(--line);
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
