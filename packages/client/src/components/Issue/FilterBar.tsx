import Dropdown from "@components/common/Dropdown";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import { useState } from "react";
import Icon from "@icon";

const filterList = ["필터1", "필터2", "필터3"];

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
        panelTitle="필터 이름"
        direction="left"
        list={filterList}
        icon
      />
    </Wrapper>
  );
};

export default FilterBar;

const Wrapper = styled.div`
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
    border: 1px solid ${theme.greyscale.line};
    border-radius: 11px 0 0 11px;
    border-right: none;
  }
  form {
    border: 1px solid ${theme.greyscale.line};
    border-radius: 11px;
    position: relative;
    flex: 1;
    overflow: hidden;
    border-radius: 0 11px 11px 0;
    input {
      background: ${theme.greyscale.inputBackgound};
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
      background: ${theme.greyscale.offWhite};
      border-color: ${theme.greyscale.titleActive};
      border-left: 1px solid ${theme.greyscale.line};
      input {
        background: ${theme.greyscale.offWhite};
      }
      + div > button {
        background: ${theme.greyscale.offWhite};
        border: 1px solid ${theme.greyscale.titleActive};
        border-right: none;
        border-radius: 11px 0 0 11px;
      }
      svg {
        opacity: 1;
      }
    }
  }
`;
