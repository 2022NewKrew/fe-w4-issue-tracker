import React from 'react';
import Styled from 'styled-components';

const App = () => {
    console.log(process.env.SERVER_BASE_URL);
    return (
        <Title>
            <div>CRA 없이 React + TypeScript 환경 셋팅하기!!</div>
        </Title>
    );
};

const Title = Styled.div`
    background-color: red;
`;

export default App;
