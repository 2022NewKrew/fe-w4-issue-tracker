import React, { useState, useEffect } from 'react';
import Route from '@core/Route';

export default function Routes({ children }) {
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

    const getCurrentPathProps = () => {
        const { props: currentPathProps } =
            children.find((el) => el.props.path === currentPath) || '';
        const { props: notFoundProps } = children.find(
            (route) => route.props.path === '*'
        );
        return currentPathProps ? currentPathProps : notFoundProps;
    };

    return <Route {...getCurrentPathProps()} />;
}
