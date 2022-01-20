import { Button, Logo, TextButton } from '@components';
import { globalStyles, styled } from '@styles';
import React from 'react';

const App = () => {
  globalStyles();

  return (
    <Warpper>
      <div>
        <Logo />
        <Logo size="medium" />
      </div>

      <div>
        <Button>standard 버튼</Button>
        <Button kind="secondary">secondary 버튼</Button>
        <Button disabled={true}>disabled 버튼</Button>
      </div>

      <div>
        <Button size="medium">standard 버튼</Button>
        <Button size="medium" kind="secondary">
          secondary 버튼
        </Button>
        <Button size="medium" disabled={true}>
          medium 버튼
        </Button>
      </div>

      <div>
        <Button size="small">standard 버튼</Button>
        <Button size="small" kind="secondary">
          secondary 버튼
        </Button>
        <Button size="small" disabled={true}>
          small 버튼
        </Button>
      </div>

      <div>
        <TextButton>버튼</TextButton>
        <TextButton disabled={true}>버튼</TextButton>
      </div>

      <div>
        <TextButton size="small">버튼</TextButton>
        <TextButton size="small" disabled={true}>
          버튼
        </TextButton>
      </div>
    </Warpper>
  );
};

export default App;

const Warpper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 720,
  margin: '0px auto',
  '& > div': {
    marginTop: '3rem',
  },
  '& > div > * + *': {
    marginTop: '0.25rem',
  },
});
