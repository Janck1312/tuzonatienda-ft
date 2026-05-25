import { Link } from 'react-router';
import AppFrame from '~/components/common/app-frame';

function loginContent() {
    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-black">Ingresar</h2>
            <form className="space-y-4">
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        <i className="pi pi-user m-1"></i>
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        <i className="pi pi-lock m-1"></i>
                        Contraseña:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                    />
                </div>
                <div className='text-center text-sm'>
                    ¿No tienes cuenta? <a href="/register">Registrate</a>
                </div>
                <div className='text-center text-sm'>
                    ¿Olvidaste tu contraseña?{' '}
                    <a
                        href="/forgot-password"
                        className="text-primary hover:underline"
                    >
                        Restablecer
                    </a>
                </div>
                <div className="flex space-x-4">
                    <button
                        type="submit"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                        className="flex-1 text-white px-4 py-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        Iniciar sesión
                    </button>
                    <Link to={"/"} className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-md text-center hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                        Regresar
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default function Login({}) {
    return <AppFrame>
        {loginContent()}
    </AppFrame>
}
