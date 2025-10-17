import type { JSX } from "react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "../../infrastructure/shared/appheader/AppHeader";
import { AppFooter } from "../../infrastructure/shared/footer/AppFooter";

export const AppLayout: React.FC<{}> = (): JSX.Element => {
    return <>
        <AppHeader />
        <section>
            <div className="main-container">
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </section>
        <AppFooter />
    </>
}