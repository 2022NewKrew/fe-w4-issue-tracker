/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, Dispatch, SetStateAction } from 'react';
import { jsx, css } from '@emotion/react';
import { theme } from '@styles/theme';
import Icon from '@icon';

interface DropdownProps {
  label: string;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  options: [string];
  type: 'Text' | 'ImageAndText' | 'Modify';
  images: [any];
  customName?: string;
}

const Dropdown = ({
  label,
  selected,
  setSelected,
  options,
  type = 'Text',
  images,
  customName,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const handleClickOption = (index) => {
    setSelected(index);
    setOpen(false);
  };
  return (
    <div css={{ position: 'relative' }}>
      <div css={IndicatorStyle} onClick={() => setOpen(true)}>
        <span>{label}</span>
        <Icon icon="Arrow" />
      </div>
      {open && (
        <ul css={PannelStyle}>
          <li>{customName ?? `${label} 필터`}</li>
          {options.map((opt, ind) => (
            <li key={opt} onClick={() => handleClickOption(ind)}>
              {opt}
              <Icon icon={selected === ind ? 'CheckOnCircle' : 'CheckOffCircle'} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const { label, body, line, background } = theme.greyScale;
const { linkSmall, textMedium, textSmall } = theme.textStyles;

const IndicatorStyle = css`
  display: flex;
  align-items: center;
  height: 32px;
  color: ${label};
  user-select: none;

  &:hover {
    color: ${body};
    cursor: pointer;
  }

  & > span {
    ${linkSmall};
    margin-top: 4px;
  }

  & > svg {
    margin-left: 4px;
  }
`;

const PannelStyle = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 240px;

  border: 1px solid ${line};
  border-radius: 16px;

  list-style: none;
  margin-top: 8px;
  padding: 0;

  li:first-child {
    ${textMedium}
    background: ${background};
    border: none;
    border-radius: 16px 16px 0px 0px;
    cursor: initial;
  }

  & > li {
    ${textSmall}
    padding: 10px 16px 6px;
    border-top: 1px solid ${line};
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
  }

  & > li > svg {
    margin-top: 3px;
  }
`;

export default Dropdown;
