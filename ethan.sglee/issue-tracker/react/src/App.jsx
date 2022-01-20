import React from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  width: 500px;
  height: 200px;
  margin: 0 auto;
  background-image: url("../public/bg.jpeg") center no-repeat;
  background-size: cover;
`
const App = () => {
  return <Container />;
};

export default App;