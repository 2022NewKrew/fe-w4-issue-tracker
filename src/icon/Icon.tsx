/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import * as icons from './svg';

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

export type IconProps = {
  icon: IconType;
  size?: string | number;
};

const Icon = ({ icon, size }: IconProps) => {
  const SVGIcon = icons[icon];
  const style = {
    width: size,
    height: 'auto',
    '& path':
      icon.startsWith('CheckBox') && icon !== 'Milestone' ? { stroke: 'currentColor' } : undefined,
  };
  return <SVGIcon css={style} />;
};

export default Icon;
