import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(): JSX.Element {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen font-mono">
            <Header />

            <main className="bg-slate-50">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
