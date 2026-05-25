import { AxiosError } from 'axios';
import type React from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router';
import { z } from 'zod';
import AppFrame from '~/components/common/app-frame';
import { AppContext } from '~/context/app.context';
import { api } from '~/exchange/utils/$api';
import { LocalStorageApi } from '~/exchange/utils/localStorageApi';

export default function Login({}) {
    const [form, setForm] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ email: '', password: '' });
    const context = useContext(AppContext);

    const loginSchema = z.object({
        email: z
            .string()
            .email({ message: 'Email inválido' })
            .nonempty({ message: 'El email es requerido' }),
        password: z
            .string()
            .min(6, {
                message: 'La contraseña debe tener al menos 6 caracteres',
            })
            .nonempty({ message: 'La contraseña es requerida' }),
    });

    async function onSubmitLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            loginSchema.parse(form);
            try {
                const res = await api.post('/authentication/login', form);
                if (res?.data?.token) {
                    LocalStorageApi.setValue('user', res.data);
                    context.setUser(res.data);
                    //navigate to dashboard
                } else {
                    setErrors((prev) => ({
                        ...prev,
                        email: 'Credenciales inválidas',
                        password: 'Credenciales inválidas',
                    }));
                }
            } catch (error) {
                if(error.status === 401) {
                    setErrors((prev) => ({
                        ...prev,
                        email: 'Credenciales inválidas',
                        password: 'Credenciales inválidas',
                    }));
                }

                if(error.status === 500) {
                    setErrors((prev) => ({
                        ...prev,
                        email: 'Error del servidor, intenta nuevamente',
                        password: 'Error del servidor, intenta nuevamente',
                    }));
                }

                if(error.status === 404) {
                    setErrors((prev) => ({
                        ...prev,
                        email: 'Credenciales inválidas',
                        password: 'Credenciales inválidas',
                    }));
                }

                if(error.status === 400) {
                    setErrors((prev) => ({
                        ...prev,
                        email: 'Datos inválidos',
                        password: 'Datos inválidos',
                    }));
                }
            }
        } catch (error) {
            if (error.name === 'ZodError') {
                const zodError = JSON.parse(error.message);
                for (let err of zodError) {
                    setErrors((prev) => ({
                        ...prev,
                        [err.path[0]]: err.message,
                    }));
                }
            }

            console.error('Login error: ', error);
        }
    }

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    }
    return (
        <AppFrame>
            <div className="max-w-md mx-auto mt-10">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">
                    Ingresar
                </h2>
                <form className="space-y-4" onSubmit={onSubmitLogin}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            <i className="pi pi-user m-1"></i>
                            Email:
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                            value={form.email}
                            onInput={(e) => onInputChange(e)}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
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
                            value={form.password}
                            onInput={(e) => onInputChange(e)}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>
                    <div className="text-center text-sm">
                        ¿No tienes cuenta? <a href="/register">Registrate</a>
                    </div>
                    <div className="text-center text-sm">
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
                        <Link
                            to={'/'}
                            className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-md text-center hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                            Regresar
                        </Link>
                    </div>
                </form>
            </div>
        </AppFrame>
    );
}
