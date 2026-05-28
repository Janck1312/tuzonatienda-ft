import { useContext } from 'react';
import Footer from './footer';
import Header from './header';
import { AppContextProvider } from '~/context/app.context-provider';
import { AppContext } from '~/context/app.context';
import Breadcrumbs from './breadcrums';
import Sidebar from './sidebar';

export default function AppFrame({ children }: { children: React.ReactNode }) {
    const context = useContext(AppContext);
    return (
        <AppContextProvider>
            <div className="min-h-screen flex flex-col">
                <Header></Header>
                { Object.keys(context.user || {}).length !== 0 && (
                    <Breadcrumbs></Breadcrumbs>
                )}
                <main className="flex p-4">
                    {Object.keys(context.user || {}).length !== 0 && (<Sidebar></Sidebar>)}
                    {children}
                </main>
                <Footer></Footer>
            </div>
        </AppContextProvider>
    );
}
