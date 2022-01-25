import React from 'react';
import { useParams } from '@core/react-router-dom/useParams';

export function User() {
    const { id } = useParams();
    return <div>User Num is {id}</div>;
}
