import Footer from "~/components/common/footer";
import Header from "~/components/common/header";

export function Welcome({children}: {children: React.ReactNode}) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header></Header>
            <main className="flex-grow p-4">
                {children}
            </main>
            <Footer></Footer>
        </div>
    );
}
