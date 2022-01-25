import React, { useState, useEffect } from 'react';
import { Route } from '@core/react-router-dom';

export function Routes({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('navigate', onLocationChange);
        window.addEventListener('popstate', onLocationChange);
        return () => {
            window.removeEventListener('navigate', onLocationChange);
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    const isURLHasParams = (path) =>
        path.includes(':') &&
        new RegExp(`${path.split('/:')[0]}/?.*`, 'g').test(currentPath);

    const getCurrentPathProps = () => {
        const currentPathProps = children.find(({ props: { path } }) => {
            if (path === '*') {
                return;
            }
            if (isURLHasParams(path)) {
                return true;
            }
            if (path === currentPath) {
                return true;
            }
        })?.props;

        const notFoundProps = children.find(
            ({ props: { path } }) => path === '*'
        ).props;

        return currentPathProps ? currentPathProps : notFoundProps;
    };

    return <Route {...getCurrentPathProps()} />;
}
