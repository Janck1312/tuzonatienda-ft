import AppFrame from '~/components/common/app-frame';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Tu zona tienda' },
        { name: 'description', content: 'Bienvenido a Tu zona tienda' },
    ];
}

export default function Home() {
    return <AppFrame>{/* Home content goes here */}</AppFrame>;
}
