import * as icons from "@assets/icons";

export interface LayoutProps {
  children: React.ReactNode;
}

// icon
export type IconName = keyof typeof icons;

export interface IconProps extends React.SVGProps<SVGElement> {
  name: IconName;
  className?: string;
}

// title
export interface TitleStyleProps {
  bold?: boolean;
}

export interface DropdownProps {
  indicator: string;
  panelTitle: string;
  list: string[];
  direction: "left" | "right";
  image?: boolean;
  icon?: boolean;
}
