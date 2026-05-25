import Footer from './footer';
import Header from './header';
import { AppContextProvider } from '~/context/app.context-provider';

export default function AppFrame({ children }: { children: React.ReactNode }) {
    return (
        <AppContextProvider>
            <div className="min-h-screen flex flex-col">
                <Header></Header>
                <main className="flex-grow p-4">{children}</main>
                <Footer></Footer>
            </div>
        </AppContextProvider>
    );
}
