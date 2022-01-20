import React from 'react';

export default function Link({ to, children }) {
    const preventReload = (e) => {
        e.preventDefault();
        window.history.pushState({}, '', to);
        const navigationEvent = new PopStateEvent('navigate');
        window.dispatchEvent(navigationEvent);
    };

    return (
        <a href={to} onClick={preventReload}>
            {children}
        </a>
    );
}
