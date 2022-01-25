export interface IGrayScale {
    titleActive: string;
    body: string;
    label: string;
    placeholder: string;
    line: string;
    inputBackground: string;
    background: string;
    offWhite: string;
}

export interface IThemeColors {
    primary1: string;
    primary2: string;
    primary3: string;
    secondary1: string;
    secondary2: string;
    secondary3: string;
    error1: string;
    error2: string;
    error3: string;
    success1: string;
    success2: string;
    success3: string;
}

export interface IColors extends IGrayScale, IThemeColors {}

export interface IFonts {
    size: {
        display: string;
        large: string;
        medium: string;
        small: string;
        xSmall: string;
    };
    weight: {
        bold: string;
        bolder: string;
        normal: string;
    };
    lineHeight: {
        display: string;
        large: string;
        medium: string;
        small: string;
        xSmall: string;
    };
}

// theme 종류에 따라 바뀌지 않는 스타일을 저장
export interface IDefaultTheme {
    fonts: IFonts;
}

export interface ITheme extends IDefaultTheme {
    colors: IColors;
}
