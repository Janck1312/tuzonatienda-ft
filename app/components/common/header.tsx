export default function Header() {
    return (
        <header className="flex px-4 py-6 bg-primary">
            <h1>Tu zona tienda</h1>
            <nav className="flex ml-auto mr-0 py-2">
                <ul className="flex gap-4 mr-0 ml-auto">
                    <li>
                        <a href="/">Principal</a>
                    </li>
                    <li>
                        <a href="/about">Sobre nosotros</a>
                    </li>
                    <li>
                        <a href="">Productos</a>
                    </li>
                    <li>
                        <a href="/contact">Contacto</a>
                    </li>
                    <li>
                        <a href="/register">Registrate</a>
                    </li>
                    <li>
                        <a href="">Ingresa</a>
                    </li>
                    <li>
                        <a href="#" title="Mis compras">
                            <i
                                className="pi pi-shopping-cart"
                                title="Mis compras"
                            ></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
