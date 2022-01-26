import { useRoute } from '@context/RouteStore';
import { regSeparateBasedSlash } from '@utils';

export function useParams() {
    const { currentRoute } = useRoute();
    const currentPath = window.location.pathname;

    const removeSlashandColumn = (str) => {
        return str.includes(':') ? str.slice(2) : str.slice(1);
    };

    const isParam = (route, path) => {
        return route.includes(':') && path;
    };

    if (!currentRoute.includes(':')) {
        return {};
    }

    const splitedCurrentRoute = currentRoute.split(regSeparateBasedSlash);
    const splitedCurrentPath = currentPath.split(regSeparateBasedSlash);

    return splitedCurrentRoute.reduce((acc, curr, idx) => {
        if (isParam(curr, splitedCurrentPath[idx])) {
            acc[removeSlashandColumn(curr)] = removeSlashandColumn(
                splitedCurrentPath[idx]
            );
        }
        return acc;
    }, {});
}
