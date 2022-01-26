import React from "react";
import * as icons from "@assets/icons";

export type IconName = keyof typeof icons;

interface IconProps extends React.SVGProps<SVGElement> {
  name: IconName;
  className?: string;
}

const Icon = ({ name, ...props }: IconProps) => {
  const SVGIcon = icons[name];
  return <SVGIcon {...props} />;
};

export default Icon;
