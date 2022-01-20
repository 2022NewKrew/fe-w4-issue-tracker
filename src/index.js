import React from 'react';
import Route from './core/Route';
import Link from './core/Link';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const Wrap = styled.div`
    font-size: 30px;
`;

const Test = () => {
    return <div>TEST</div>;
};

const App = () => {
    return (
        <>
            <Link to="/test">test</Link>
            <Route path="/test" component={Test} />
        </>
    );
};

ReactDom.render(<App />, document.getElementById('root'));
