import React from 'react'
import styled from 'styled-components'
import bg from '../public/bg.jpeg'

const imgUrl = 'https://picsum.photos/500/500'

const Container = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background-image: url(${imgUrl});
  background-size: cover;
`

const App = () => {
  return <div>
    <Container></Container>
    <img src={bg} alt="" />
  </div>
}

export default App
