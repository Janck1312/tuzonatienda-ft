import Dashboard from '~/dashboard/dashboard';
import type { Route } from './+types/home';
import { useContext } from 'react';
import { AppContext } from '~/context/app.context';
import { Navigate } from 'react-router';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Tu zona tienda | Dashboard' },
        { name: 'description', content: 'Bienvenido de nuevo' },
    ];
}

export default function() {
    const context = useContext(AppContext);
    if(Object.keys(context.user || {}).length === 0) {
        return <Navigate to="/login" replace />;
    }
    return <Dashboard />;
}