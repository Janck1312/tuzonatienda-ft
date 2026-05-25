import { type ReactNode, useEffect, useState } from 'react';
import { AppContext } from './app.context';
import { api } from '~/exchange/utils/$api';

interface AppContextProviderProps {
    children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const interceptor = api.interceptors.request.use(config => {
            if(user?.token) {
                config.headers['Authorization'] = `Bearer ${user?.token}`;
            }
            return config;
        });
        return () => api.interceptors.request.eject(interceptor);
    }, []);

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};
