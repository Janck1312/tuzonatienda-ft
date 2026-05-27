import { useContext } from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';
import { AppContext } from '~/context/app.context';

export default function Header() {
    const { user, setUser } = useContext<{
        user: any;
        setUser: React.Dispatch<React.SetStateAction<any>>;
    }>(AppContext);
    const navigate = useNavigate();
    
    return (
        <header className="flex px-4 py-6 bg-primary">
            <h1>Tu zona tienda</h1>
            <nav className="flex ml-auto mr-0 py-2">
                <ul className="flex gap-4 mr-0 ml-auto">
                    <li onClick={() => navigate('/')}>
                        <Link to="/">Principal</Link>
                    </li>
                    <li onClick={() => navigate('/about')}>
                        <Link to="/about">Sobre nosotros</Link>
                    </li>
                    {user?.id && (
                        <li onClick={() => navigate('/products')}>
                            <Link to="/products">Productos</Link>
                        </li>
                    )}
                    <li onClick={() => navigate('/contact')}>
                        <Link to="/contact">Contacto</Link>
                    </li>
                    <li onClick={() => navigate('/signup')}>
                        <Link to="/signup">Registrate</Link>
                    </li>
                    <li onClick={() => navigate('/login')}>
                        <Link to="/login">Ingresa</Link>
                    </li>
                    <li>
                        <Link to="#" title="Mis compras">
                            <i
                                className="pi pi-shopping-cart"
                                title="Mis compras"
                            ></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
