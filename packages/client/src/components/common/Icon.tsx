import React from "react";
import * as icons from "@assets/icons";

type IconName = keyof typeof icons;

interface IconProps extends React.SVGProps<SVGElement> {
  name: IconName;
  className?: string;
  style?: any;
}

const Icon = ({ name, ...props }: IconProps) => {
  const SVGIcon = icons[name];
  return <SVGIcon {...props} />;
};

export default Icon;
