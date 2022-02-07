/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/react';
import { theme } from '@styles/theme';
import Dropdown from '@components/Dropdown';
import Icon from '@/icon/Icon';

const FilterBar = ({ selected, onSelect, options, customName, placeholder }) => {
  const [typing, setTyping] = useState<boolean>(false);

  const handleFocus = () => setTyping(true);
  const handleBlur = () => setTyping(false);

  return (
    <div css={[BarStyle, typing ? TypingStyle : undefined]}>
      <a className="dropdown">
        <Dropdown
          label="필터"
          selected={selected}
          onSelect={onSelect}
          options={options}
          type="Text"
          customName={customName}
          titleWidth={60}
        />
      </a>
      <div className="search">
        <Icon icon="Search" size={16} />
        <input placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur} />
      </div>
    </div>
  );
};

const { line, background, inputBackground, titleActive, placeHolder, offWhite } = theme.greyScale;
const { textSmall } = theme.textStyles;

const BarStyle = css`
  width: fit-content;
  height: 40px;
  display: flex;

  & > .dropdown {
    border: 1px solid ${line};
    border-radius: 11px 0 0 11px;
    border-right: none;
    width: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${background};
    &:hover {
      background: ${line};
    }
  }

  & > .search {
    border: 1px solid ${line};
    border-radius: 0 11px 11px 0;
    width: 472px;
    padding: 0 24px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: ${inputBackground};
    color: ${placeHolder};

    & > input {
      width: 100%;
      margin-left: 8px;
      padding: 4px 0 0;
      background: none;
      border: none;
      ${textSmall}
      color: ${titleActive};

      &:focus {
        outline: none;
      }

      ::placeholder {
        color: ${placeHolder};
      }
    }
  }
`;

const TypingStyle = css`
  & > .dropdown {
    border: 1px solid ${titleActive};
    background: ${offWhite};
    border-right: none;
  }
  & > .search {
    border: 1px solid ${titleActive};
    background: ${offWhite};
  }
`;

export default FilterBar;
