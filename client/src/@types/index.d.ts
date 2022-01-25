import { ITheme } from '../styles/themeInterface';

declare module '@types' {
    interface IStyleTheme extends ITheme {}
    interface ITabElement {
        icon: string;
        title: string;
        count: number;
        isLast?: boolean;
    }
}
