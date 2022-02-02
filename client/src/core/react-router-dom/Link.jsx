import { dispatchPopStateEvent } from '@utils';

export function Link({ to, children }) {
    const preventReload = (e) => {
        e.preventDefault();
        window.history.pushState({}, '', to);
        dispatchPopStateEvent();
    };

    return (
        <a href={to} onClick={preventReload}>
            {children}
        </a>
    );
}
