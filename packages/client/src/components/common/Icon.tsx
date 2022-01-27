import * as icons from "@assets/icons";
import { IconName, IconProps } from "@interface/components";

const Icon = ({ name, ...props }: IconProps) => {
  const SVGIcon = icons[name as IconName];
  return <SVGIcon {...props} />;
};

export default Icon;
