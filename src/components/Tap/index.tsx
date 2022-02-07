/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { theme } from '@styles/theme';
import Icon, { IconType } from '@icon';

interface Option {
  name: string;
  icon: IconType;
  count: number;
}

interface TapProps {
  options: Option[];
  selected: number;
  onClickOption: (index: number) => void;
}

const Tap = ({ options, selected, onClickOption }: TapProps) => {
  const tabElems = options.map(({ icon, name, count }, idx) => (
    <a key={name} css={idx === selected ? SelectedStyle : []} onClick={() => onClickOption(idx)}>
      <Icon icon={icon} />
      {name} ({count})
    </a>
  ));

  return <div css={TapStyle}>{tabElems}</div>;
};

const { line, background, inputBackground, body, label } = theme.greyScale;
const { linkSmall } = theme.textStyles;

const TapStyle = css`
  border: 1px solid ${line};
  border-radius: 11px;
  background: ${background};

  width: fit-content;
  height: 40px;
  display: flex;
  overflow: hidden;

  & > a {
    ${linkSmall};
    color: ${label};

    width: 160px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
      background: ${inputBackground};
    }
  }

  & > a > svg {
    margin-right: 8px;
  }

  a:first-child {
    border-right: 1px solid ${line};
  }
`;

const SelectedStyle = css`
  background: ${line};
  color: ${body};
`;

export default Tap;
