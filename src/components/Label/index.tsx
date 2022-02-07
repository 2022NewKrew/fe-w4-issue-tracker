/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { theme } from '@styles/theme';
import Icon, { IconType } from '@icon';

interface LabelProps {
  type: 'Blue' | 'Purple' | 'DarkText' | 'LightText' | 'Line';
  icon: IconType;
  name: string;
}

const Label = ({ type, icon, name }: LabelProps) => {
  return (
    <div css={[DefaultStyle, ...LabelStyle[type]]}>
      {['Blue', 'Purple'].includes(type) && <Icon icon={icon} />}
      <span>{name}</span>
    </div>
  );
};

const { lightBlue, blue } = theme.colors.primary;
const { lightPurple, purple } = theme.colors.secondary;
const { textXSmall } = theme.textStyles;
const { titleActive, background, body, offWhite, label, line } = theme.greyScale;

const DefaultStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;

  ${textXSmall}

  box-sizing: border-box;
  border-radius: 30px;

  & > span {
    margin-top: 2px;
    user-select: none;
  }
`;

const Large = css`
  padding: 0 16.5px;
  height: 40px;

  & > span {
    margin-left: 4px;
  }
`;

const Small = css`
  padding: 0 16px;
  height: 28px;
`;

const DarkText = css`
  color: ${titleActive};
  background: ${background};
`;

const LightText = css`
  color: ${offWhite};
  background: ${body};
`;

const Line = css`
  color: ${label};
  border: 1px solid ${line};
`;

const Blue = css`
  background: ${lightBlue};
  color: ${blue};
  border: 1px solid ${blue};
`;

const Purple = css`
  background: ${lightPurple};
  color: ${purple};
  border: 1px solid ${purple};
`;

const LabelStyle = {
  Blue: [Large, Blue],
  Purple: [Large, Purple],
  DarkText: [Small, DarkText],
  LightText: [Small, LightText],
  Line: [Small, Line],
};

export default Label;
