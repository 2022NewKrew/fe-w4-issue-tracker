import { useState, useEffect } from 'react';

export function usePopstate() {
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

    return currentPath;
}
