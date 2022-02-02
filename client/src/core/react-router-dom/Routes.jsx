import { Route } from '@core/react-router-dom';
import { usePopstate } from '@hooks';
import { regSeparateBasedSlash } from '@utils';

export function Routes({ children }) {
    const currentPath = usePopstate();

    const isURLMatchPath = (path) => {
        const regManageParams = path
            .split(regSeparateBasedSlash)
            .map((urlPath) => (urlPath.includes(':') ? '/?.*' : urlPath))
            .join('');
        return new RegExp(`^${regManageParams}$`, 'g').test(currentPath);
    };

    const getCurrentPathProps = () => {
        const routesArr =
            toString.call(children) === '[object Object]'
                ? [children]
                : children;

        const currentPathProps = routesArr.find(({ props: { path } }) => {
            if (path === '*') {
                return;
            }
            if (isURLMatchPath(path)) {
                return true;
            }
        })?.props;

        const notFoundProps = routesArr.find(
            ({ props: { path } }) => path === '*'
        ).props;

        return currentPathProps ? currentPathProps : notFoundProps;
    };

    return <Route {...getCurrentPathProps()} />;
}
