import Signup from "~/signup/signup";
import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Tu zona tienda | Registrarme' },
        { name: 'description', content: 'Crea tu cuenta en Tu zona tienda' },
    ];
}

export default function() {
    return <Signup />;
}