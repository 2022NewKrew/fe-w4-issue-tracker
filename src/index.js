import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { RouteProvider } from '@context/RouteStore';

ReactDom.render(
    <RouteProvider>
        <App />
    </RouteProvider>,
    document.getElementById('root')
);
