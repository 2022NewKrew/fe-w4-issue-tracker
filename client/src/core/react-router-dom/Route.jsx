import { useEffect } from 'react';
import { useRoute } from '@context/RouteStore';

export function Route({ path, element }) {
    const { setCurrentRoute } = useRoute();

    useEffect(() => {
        setCurrentRoute(path);
    }, []);

    return element;
}
