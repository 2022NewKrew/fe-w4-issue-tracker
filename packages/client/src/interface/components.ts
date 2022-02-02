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
