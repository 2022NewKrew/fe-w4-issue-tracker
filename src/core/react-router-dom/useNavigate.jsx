
export function useNavigate() {
    return (to, option) => {
        if (!to) {
            return;
        }

        if (typeof to === 'number') {
            history.go(to);
            return;
        }

        if (option?.replace) {
            history.replaceState({}, '', to);
            return;
        }

        history.pushState({}, '', to);
    };
}
