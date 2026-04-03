import { useState } from 'react';

export default function Footer() {
    const [fullYear] = useState(() => new Date().getFullYear());
    return (
        <footer className="text-right p-4">
            <p>
                &copy; {fullYear} Tu Zona Tienda. Todos los derechos reservados.
            </p>
        </footer>
    );
}
