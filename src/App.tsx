/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';
import { theme } from '@styles/theme';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>
  );
};

export default App;
