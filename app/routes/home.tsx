import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Tu zona tienda' },
        { name: 'description', content: 'Bienvenido a Tu zona tienda' },
    ];
}

export default function Home() {
    return <Welcome children={<h2>Bienvenido a Tu Zona Tienda</h2>} />;
}
