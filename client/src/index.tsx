import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import App from './App';

ReactDOM.render(
    <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>,
    document.querySelector('#root')
);
