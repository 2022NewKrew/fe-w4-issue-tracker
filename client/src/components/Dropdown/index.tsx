/** @jsxRuntime classic */
/** @jsx jsx */
import { useState, useRef } from 'react';
import { jsx, css } from '@emotion/react';
import { theme } from '@styles/theme';
import Icon from '@icon';

interface DropdownProps {
  label: string;
  selected: number;
  onSelect: (index: number) => void;
  options: string[];
  type: 'Text' | 'ImageAndText' | 'Modify';
  images?: JSX.Element[];
  customName?: string;
  titleWidth?: number;
}

const Dropdown = ({
  label,
  selected,
  onSelect,
  options,
  type = 'Text',
  images,
  customName,
  titleWidth,
  ...props
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLUListElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (!panelRef.current?.contains(e.target as Node)) closePanel();
  };

  const closePanel = () => {
    setOpen(false);
    document.removeEventListener('mousedown', handleClickOutside);
  };

  const handleClickOption = (index: number) => {
    onSelect(index);
    closePanel();
  };

  const handleClickIndicator = () => {
    setOpen(true);
    document.addEventListener('mousedown', handleClickOutside);
  };

  const optionEl = options.map((opt, idx) => (
    <li key={opt} onClick={() => handleClickOption(idx)}>
      <span>
        {type === 'ImageAndText' && images[idx]}
        {opt}
      </span>
      {type !== 'Modify' && <Icon icon={selected === idx ? 'CheckOnCircle' : 'CheckOffCircle'} />}
    </li>
  ));

  return (
    <div css={{ position: 'relative' }} {...props}>
      <div css={IndicatorStyle} onClick={handleClickIndicator}>
        <span css={{ width: `${titleWidth}px` }}>{label}</span>
        <Icon icon="Arrow" />
      </div>
      {open && (
        <ul css={PannelStyle} ref={panelRef}>
          <li>{customName ?? `${label} 필터`}</li>
          {optionEl}
        </ul>
      )}
    </div>
  );
};

const { label, body, line, background, offWhite } = theme.greyScale;
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
  left: -80px;
  display: flex;
  flex-direction: column;
  width: 240px;
  background: ${offWhite};

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

  & > li > span {
    ${textSmall}
    display: flex;
  }

  & > li > span > svg {
    margin: 2px 8px 0 0;
    width: 20px;
  }
`;

export default Dropdown;
