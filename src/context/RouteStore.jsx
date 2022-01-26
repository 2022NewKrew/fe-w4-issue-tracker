import { useState, useContext, createContext } from 'react';

const RouteContext = createContext();

export function useRoute() {
    return useContext(RouteContext);
}

export function RouteProvider({ children }) {
    const [currentRoute, setCurrentRoute] = useState('');

    return (
        <RouteContext.Provider
            value={{
                currentRoute,
                setCurrentRoute,
            }}
        >
            {children}
        </RouteContext.Provider>
    );
}
