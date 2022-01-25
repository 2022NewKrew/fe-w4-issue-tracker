import { IGrayScale, IThemeColors, IFonts, IDefaultTheme } from './themeInterface';

const lightThemeGrayScale: IGrayScale = {
    titleActive: '#14142B',
    body: '#4E4B66',
    label: '#6E7191',
    placeholder: '#A0A3BD',
    line: '#D9DBE9',
    inputBackground: '#EFF0F6',
    background: '#F7F7FC',
    offWhite: '#FEFEFE',
};

const lightThemeColors: IThemeColors = {
    primary1: '#007AFF',
    primary2: '#C7EBFF',
    primary3: '#004DE3',
    secondary1: '#0025E7',
    secondary2: '#CCD4FF',
    secondary3: '#020070',
    error1: '#FF3B30',
    error2: '#FFD1CF',
    error3: '#C60B00',
    success1: '#34C759',
    success2: '#DDFFE6',
    success3: '#00A028',
};

const fonts: IFonts = {
    size: {
        display: '32px',
        large: '24px',
        medium: '18px',
        small: '16px',
        xSmall: '12px',
    },
    weight: {
        bold: '700',
        bolder: '500',
        normal: '400',
    },
    lineHeight: {
        display: '48px',
        large: '40px',
        medium: '32px',
        small: '28px',
        xSmall: '20px',
    },
};

const defaultTheme: IDefaultTheme = {
    fonts,
};

export const lightTheme = {
    ...defaultTheme,
    colors: { ...lightThemeGrayScale, ...lightThemeColors },
};
