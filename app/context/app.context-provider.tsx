import { type ReactNode, useEffect, useState } from 'react';
import { AppContext } from './app.context';
import { api } from '~/exchange/utils/$api';
import { LocalStorageApi } from '~/exchange/utils/localStorageApi';

interface AppContextProviderProps {
    children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [user, setUser] = useState(null);
    const [breadcrumbs, setBreadcrumbs] = useState([]);

    useEffect(() => {
        const session = LocalStorageApi.getValue('user')
        setUser(session);
        
        const interceptor = api.interceptors.request.use(config => {
            if(user?.token) {
                config.headers['Authorization'] = `Bearer ${user?.token}`;
            }
            return config;
        });
        return () => api.interceptors.request.eject(interceptor);
    }, []);

    return (
        <AppContext.Provider value={{ user, setUser, breadcrumbs, setBreadcrumbs }}>
            {children}
        </AppContext.Provider>
    );
};
