import { ThemeProvider } from 'styled-components';
import { Routes, Route } from '@core/react-router-dom';
import { NotFound } from '@components';
import { GlobalStyle, theme } from '@style';

export default function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Routes>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ThemeProvider>
        </>
    );
}
