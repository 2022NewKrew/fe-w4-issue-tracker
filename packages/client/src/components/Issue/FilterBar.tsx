import Dropdown from "@components/common/Dropdown";
import styled from "@emotion/styled";
import theme from "@styles/theme";
import { useState } from "react";

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
        <input
          id="search"
          placeholder={focus ? "Search all issues" : "is:issue is:open"}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        ></input>
      </form>
      <Dropdown title="필터 이름" list={filterList} />
    </Wrapper>
  );
};

export default FilterBar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 601px;
  height: 40px;
  div button,
  form {
    border: 1px solid ${theme.greyscale.line};
    border-radius: 11px;
  }

  div > button:first-child {
    border-right: 1px solid ${theme.greyscale.line};
    border-radius: 11px 0 0 11px;
    border-right: none;
  }
  form {
    flex: 1;
    overflow: hidden;
    border-radius: 0 11px 11px 0;
    input {
      background: ${theme.greyscale.inputBackgound};
      width: 100%;
      height: 100%;
      padding: 0 48px;
    }
    :focus-within {
      background: ${theme.greyscale.offWhite};
      border-color: ${theme.greyscale.titleActive};
      border-left: 1px solid ${theme.greyscale.line};
      input {
        background: ${theme.greyscale.offWhite};
      }
      + div > button:first-child {
        background: ${theme.greyscale.offWhite};
        border-color: ${theme.greyscale.titleActive};
      }
    }
  }
`;
