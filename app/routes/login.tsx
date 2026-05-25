import Login from '~/login/login';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Tu zona tienda | Ingresar' },
        { name: 'description', content: 'Ingresa a tu cuenta' },
    ];
}

export default function() {
    return <Login />;
}