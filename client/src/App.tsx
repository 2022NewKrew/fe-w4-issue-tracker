import React from 'react';
import Styled from 'styled-components';
import { Header } from './components';

const App = () => {
    return (
        <Container>
            <Wrapper>
                <Header />
                <Title>
                    <div>CRA 없이 React + TypeScript 환경 셋팅하기!!</div>
                </Title>
            </Wrapper>
        </Container>
    );
};

const Container = Styled.div`
    display: flex;
    justify-content: center;
    padding-top: 27px;
`;

const Wrapper = Styled.div`
    width: 1280px;
`;

const Title = Styled.div`
    background-color: red;
`;

export default App;
