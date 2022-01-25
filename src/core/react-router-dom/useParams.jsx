import React from 'react';
import { useRoute } from '@context/RouteStore';

export function useParams() {
    const { currentRoute } = useRoute();
    const currentPath = window.location.pathname;

    if (currentRoute.includes(':')) {
        const [baseURL, paramKey] = currentRoute.split('/:');
        const paramValue = currentPath.split(`${baseURL}/`)[1];
        return { [paramKey]: paramValue };
    }
    return {};
}
