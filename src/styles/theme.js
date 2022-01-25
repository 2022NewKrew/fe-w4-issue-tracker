import { textStyles } from './textStyle';

const greyScale = {
  titleActive: '#14142B',
  body: '#4E4B66',
  label: '#6E7191',
  placeHolder: '#A0A3BD',
  line: '#D9DBE9',
  inputBackground: '#EFF0F6',
  background: '#F7F7FC',
  offWhite: '#FEFEFE',
};

const colors = {
  primary: {
    blue: '#007AFF',
    lightBlue: '#C7EBFF',
    darkBlue: '#004DE3',
  },
  secondary: {
    purple: '#0025E7',
    lightPurple: '#CCD4FF',
    darkPurple: '#020070',
  },
  error: {
    red: '#FF3B30',
    lightRed: '#FFD1CF',
    darkRed: '#C60B00',
  },
  success: {
    green: '#34C759',
    lightGreen: '#DDFFE6',
    darkGreen: '#00A028',
  },
};

export const theme = {
  greyScale,
  colors,
  textStyles,
};
