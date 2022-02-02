import { Dropdown } from "@UI/Molecules";
import Icon from "@styles/Icon";

import { useState } from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

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
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Icon name="search" />
        <input
          id="search"
          placeholder={focus ? "Search all issues" : "is:issue is:open"}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        ></input>
      </form>
      <Dropdown
        indicator="Filter"
        panelTitle="이슈 필터"
        direction="left"
        list={filterList}
        icon
      />
    </Wrapper>
  );
};

export default FilterBar;

const Wrapper = styled.div`
  ${({ theme: { Greyscale } }) => css`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 601px;
    height: 40px;
    & > form,
    & > div {
      height: 100%;
      display: flex;
      align-items: center;
    }
    div > button {
      padding: 0 25px;
      height: 100%;
      border: 1px solid ${Greyscale.line};
      border-radius: 11px 0 0 11px;
      border-right: none;
    }
    form {
      border: 1px solid ${Greyscale.line};
      border-radius: 11px;
      position: relative;
      flex: 1;
      overflow: hidden;
      border-radius: 0 11px 11px 0;
      input {
        background: ${Greyscale.inputBackground};
        width: 100%;
        height: 100%;
        padding: 0 48px;
      }
      svg {
        top: 10px;
        left: 24px;
        opacity: 0.5;
      }
      :focus-within {
        background: ${Greyscale.offWhite};
        border-color: ${Greyscale.titleActive};
        border-left: 1px solid ${Greyscale.line};
        input {
          background: ${Greyscale.offWhite};
        }
        + div > button {
          background: ${Greyscale.offWhite};
          border: 1px solid ${Greyscale.titleActive};
          border-right: none;
          border-radius: 11px 0 0 11px;
        }
        svg {
          opacity: 1;
        }
      }
    }
  `}
`;
