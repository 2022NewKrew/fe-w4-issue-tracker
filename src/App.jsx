/** @jsx jsx */
import { jsx, css, ThemeProvider } from '@emotion/react';
import { theme } from '@Styles/theme';
import Button from '@Components/Button.jsx';
import { ReactComponent as Plus } from '@Icons/Plus.svg';

const App = () => {
  const spacing = css`
    margin: 10px;
  `;

  return (
    <ThemeProvider theme={theme}>
      <Button css={spacing} type="Large" onClick={() => console.log('hi')}>
        <span>BUTTON</span>
      </Button>
      <Button css={spacing} type="MediumStandard" onClick={() => console.log('hi')}>
        <span>BUTTON</span>
      </Button>
      <Button css={spacing} type="SmallStandard" onClick={() => console.log('hi')}>
        <Plus />
        <span>BUTTON</span>
      </Button>
      <Button css={spacing} type="SmallSecondary" onClick={() => console.log('hi')}>
        <Plus />
        <span>BUTTON</span>
      </Button>
    </ThemeProvider>
  );
};

export default App;
